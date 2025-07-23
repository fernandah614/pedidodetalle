import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_empleado')
      table.integer('id_cliente')
      table.string('nombre_cliente')
      table.date('Fecha_pedido')
      table.date('Fecha_envio')
      table.integer('id_transporte')
     

 
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}