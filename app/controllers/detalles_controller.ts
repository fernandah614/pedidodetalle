// import type { HttpContext } from '@adonisjs/core/http'
import { DetalleService } from "../services/detalle_service.js"

const detalleservice = new DetalleService()
export default class DetallesController {
    async crearDetalle({ request, response }) {
    try {
      const { id_pedido, id_producto, nombre_pedido } = request.body()
      const nuevo = await detalleservice.crear({ id_pedido, id_producto, nombre_pedido })
      return response.json({ msj: 'Detalle creado correctamente', data: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
  }
