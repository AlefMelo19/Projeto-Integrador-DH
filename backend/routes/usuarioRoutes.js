const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.cadastrarUsuario);

router.post('/usuarios/login', usuarioController.loginUsuario);

router.get('/usuarios/:usuarioId', usuarioController.obterUsuario);


module.exports = router;
