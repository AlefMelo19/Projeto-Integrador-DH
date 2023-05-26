const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.get('/usuarios/:usuarioId/carrinho', carrinhoController.listarItensCarrinho);

router.post('/usuarios/:usuarioId/carrinho', carrinhoController.adicionarItemCarrinho);

router.delete('/usuarios/:usuarioId/carrinho/:itemId', carrinhoController.removerItemCarrinho);

module.exports = router;
