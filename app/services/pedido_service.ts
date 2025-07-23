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
  
}
