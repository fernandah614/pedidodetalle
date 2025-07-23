import Pedido from "#models/pedido"

export class PedidoService {
  async crear(data: Partial<Pedido>) {
    return await Pedido.create(data)
  }

  async mostraerpedidodetalle(id:number){
    const list = await Pedido.query()
    .where('id', id)
    .preload('detalles')
    return list
  }

  async todospedidodetalle(){
    const list = await Pedido.query()
    .preload('detalles')
    return list
  }
  
  async mostrarpedidodetallecampoespecifico() {
    const respuesta = await Pedido.query()
      .select('id', 'id_cliente', 'nombre_cliente', 'Fecha_pedido')
      .preload('detalles', (detallequery) => {
        detallequery.select('id', 'id_producto', 'nombre_pedido')
      })

    return respuesta
  }

  async mostrarpedidodetallecampoespecificoid(id){
    const res = await Pedido.query()
    .select('id', 'nombre_cliente','Fecha_pedido')
    .where('id',id)
    .preload('detalles',(dquery) => {
      dquery.select('nombre_pedido')
    })
    return res;
  }

  async mostrarPedidosConDetallesEspecificos() {
  const res = await Pedido.query()//consulta a la tabla de pedidos
    .select('id', 'id_cliente', 'nombre_cliente', 'Fecha_pedido')//Selecciona las columnas específicas que se quieren mostrar del pedido

    .whereHas('detalles', (query) => {//Filtra los pedidos que tengan detalles con ciertos productos específicos
      query.whereIn('id_producto', [1, 2, 3, 4, 5])
    })
    .preload('detalles', (detalleQuery) => {
      detalleQuery.select('id', 'id_producto', 'nombre_pedido', 'id_pedido')
    })

  return res
}

async todopedido(){
    const list = await Pedido.query()
   .select('id','nombre_cliente','Fecha_pedido')
    return list
  }

  async traerNombreCliente(){//like los que comiencen y termien con a
    const lista = await Pedido.query()
    .select('id','nombre_cliente','Fecha_pedido')
    .whereLike('nombre_cliente','%a%')
    return lista
  }
}
