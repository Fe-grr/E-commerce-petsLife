const express = require('express');
const path = require("path");
const isLogin = require('../middlewares/isLogin');
const produtos = require('../models/produtosModels');
const routes = express.Router();

const indexController = require('../controllers/indexController');
const cadastarCategoriaController = require('../controllers/cadastrarCategoriaController');
const deletarCategoria = require('../controllers/deletarCategoria');


routes.get("/",indexController.exibirHome);
routes.get("/home", indexController.exibirHome);

routes.get("/produto/:id", indexController.exibirProduto);

routes.get("/produtos", indexController.exibirProdutos);

routes.get("/quemsomos", indexController.exibirQuemsomos);

routes.get("/carrinho", indexController.exibirCarrinho);

routes.get("/login", indexController.exibirLogin);

routes.get("/categoria", indexController.exibirCategoria);

routes.get("/admin", isLogin, indexController.exibirAdmin)

routes.get("/admin/adminprodutos", isLogin, indexController.exibirAdminProdutos)

routes.get("/admin/cadastrocategoria", indexController.exibirCadastroCategoria)

routes.post("/cadastarCategoria", cadastarCategoriaController.category)

routes.post("/deletarCategoria", deletarCategoria.deletar)

routes.get("/admin/admincategorias", isLogin, indexController.exibirAdminCategorias)

routes.get("/finalizacaodecompra", isLogin, indexController.exibirFinalizacaodecompra);

module.exports = routes;