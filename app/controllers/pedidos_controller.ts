import  {PedidoService}  from "../services/pedido_service.js"
const pedidoService = new PedidoService()

export default class PedidosController {
  async crearPedido({ request, response }) {
    try {
      const {
        id_empleado,
        id_cliente,
        nombre_cliente,
        Fecha_pedido,
        Fecha_envio,
        id_transporte
      } = request.body()

      const nuevoPedido = await pedidoService.crear({
        id_empleado,
        id_cliente,
        nombre_cliente,
        Fecha_pedido,
        Fecha_envio,
        id_transporte
      })

      return response.json({
        msj: "Pedido creado correctamente",
        data: nuevoPedido
      })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async mostraerpedidodetalle({ params, response }) {
  try {
    const { id } = params
    const res = await pedidoService.mostraerpedidodetalle(id) 
    return response.json({ data: res })
  } catch (error) {
    return response.json({ error: error.message })
  }
}
async todospedidodetalle({ response }) {
  try {
    const data = await pedidoService.todospedidodetalle()
    return response.json({ data })
  } catch (error) {
    return response.json({ error: error.message })
  }
}
async mostrarPedidoDetalleCampo({ response }) {
    try {
      const resultado = await pedidoService.mostrarpedidodetallecampoespecifico()
      return response.json(resultado)
    } catch (error) {
      console.log(error) 
      return response.json({ mensaje: 'Error al obtener los pedidos con detalles' })
    }
  }
  async mostrarpedidodetallecampoespecificoid({ params, response }) {
  try {
    const resultado = await pedidoService.mostrarpedidodetallecampoespecificoid(params.id)
    return response.json(resultado)
  } catch (error) {
    return response.json({ mensaje: 'Error al obtener el pedido con detalles' })
  }
}
async mostrarPedidosConDetallesEspecificos({ response }) {
  try {
    const pedidos = await pedidoService.mostrarPedidosConDetallesEspecificos()
    return response.json(pedidos)
  } catch (error) {
    return response.json({ mensaje: 'Error al obtener los pedidos filtrados' })
  }
}
async listarPedidos({ response }) {
  try {
    const pedidos = await pedidoService.todopedido()
    response.json(pedidos)
  } catch (error) {
    response.json({ mensaje: 'Error al listar los pedidos' })
  }
}
async traerNombreCliente({ response }) {
    try {
      const data = await pedidoService.traerNombreCliente()
      return response.json(data)
    } catch (error) {
      return response.json({ error: 'Error al traer los nombres de cliente' })
    }
  }
}