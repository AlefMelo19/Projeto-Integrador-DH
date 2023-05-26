const Usuario = require('../modells/usuarioModell');

// Função para cadastrar um novo usuário
exports.cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verificar se o usuário já está cadastrado
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'Usuário já cadastrado' });
    }

    // Criar um novo usuário
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao cadastrar o usuário' });
  }
};

// Função para fazer login de um usuário
exports.loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o usuário existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar a senha
    const senhaCorreta = await usuario.verificarSenha(senha);
    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Gerar token de autenticação
    const token = gerarToken(usuario);

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao fazer login' });
  }
};

// Função para obter os detalhes de um usuário
exports.obterUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    // Verificar se o usuário existe
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao obter os detalhes do usuário' });
  }
};
