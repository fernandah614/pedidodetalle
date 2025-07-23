import Route from "@adonisjs/core/services/router";
import PedidosController from "#controllers/pedidos_controller";

const pedido = new PedidosController()

Route.post('/pedido', pedido.crearPedido)
Route.get('/mostrarpedido/:id',pedido.mostraerpedidodetalle)
Route.get('/pedidosdetalles',pedido.todospedidodetalle)
Route.get('/pedidodetallescampoespecifico',pedido.mostrarPedidoDetalleCampo)
Route.get('/pedidos/detalle/:id',pedido.mostrarpedidodetallecampoespecificoid)//no funciona
Route.get('/pedidos/detalles-especificos',pedido.mostrarPedidosConDetallesEspecificos)
Route.get('/pedidos', pedido.listarPedidos)
Route.get('/pedidosnombrea', pedido.traerNombreCliente)
