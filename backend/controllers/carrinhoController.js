const Carrinho = require('../modells/carrinhoModell');

// Função para listar os itens do carrinho
exports.listarItensCarrinho = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    // Verificar se o usuário possui um carrinho
    const carrinho = await Carrinho.findOne({ usuario: usuarioId });
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }

    return res.status(200).json(carrinho.itens);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao listar os itens do carrinho' });
  }
};

// Função para adicionar um item ao carrinho
exports.adicionarItemCarrinho = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const { produtoId, quantidade } = req.body;

    // Verificar se o usuário possui um carrinho
    let carrinho = await Carrinho.findOne({ usuario: usuarioId });

    // Se o carrinho não existir, criar um novo
    if (!carrinho) {
      carrinho = new Carrinho({ usuario: usuarioId, itens: [] });
    }

    // Verificar se o item já está no carrinho
    const itemExistente = carrinho.itens.find(item => item.produto.toString() === produtoId);
    if (itemExistente) {
      // Se o item já existir, atualizar a quantidade
      itemExistente.quantidade += quantidade;
    } else {
      // Caso contrário, adicionar um novo item
      carrinho.itens.push({ produto: produtoId, quantidade });
    }

    await carrinho.save();

    return res.status(200).json({ message: 'Item adicionado ao carrinho com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao adicionar o item ao carrinho' });
  }
};

// Função para remover um item do carrinho
exports.removerItemCarrinho = async (req, res) => {
  try {
    const { usuarioId, itemId } = req.params;

    // Verificar se o usuário possui um carrinho
    const carrinho = await Carrinho.findOne({ usuario: usuarioId });
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }

    // Verificar se o item existe no carrinho
    const itemIndex = carrinho.itens.findIndex(item => item._id.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ error: 'Item não encontrado no carrinho' });
    }

    // Remover o item do carrinho
    carrinho.itens.splice(itemIndex, 1);

    await carrinho.save();

    return res.status(200).json({ message: 'Item removido do carrinho com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover o item do carrinho' });
  }
};