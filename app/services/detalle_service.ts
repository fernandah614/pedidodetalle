import Detalle from "#models/detalle";


export class DetalleService {
 async crear({ id_pedido, id_producto, nombre_pedido }) {
    const nuevo = await Detalle.create({ id_pedido, id_producto, nombre_pedido })
    return nuevo
  }
}