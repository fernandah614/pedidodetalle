import Route from "@adonisjs/core/services/router";
import PedidosController from "#controllers/pedidos_controller";

const pedido = new PedidosController()

Route.post('/pedido', pedido.crearPedido)
Route.get('/mostrarpedido/:id',pedido.mostraerpedidodetalle)
Route.get('/pedidosdetalles',pedido.todospedidodetalle)
