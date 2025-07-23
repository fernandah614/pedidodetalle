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
}
