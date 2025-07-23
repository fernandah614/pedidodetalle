import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/orm'
import Detalle from './detalle.js'
export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column({columnName:'id_empleado'})
  declare id_empleado: number

  @column({columnName:'id_cliente'})
  declare id_cliente: number

  @column({columnName:'nombre_cliente'})
  declare nombre_cliente: string

  @column({columnName:'Fecha_pedido'})
  declare Fecha_pedido: DateTime

  @column({columnName:'Fecha_envio'})
  declare Fecha_envio: DateTime
  
  @column({columnName:'id_transporte'})
  declare id_transporte: number




  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Detalle, {
    foreignKey: 'id_pedido', 
  })
  declare detalles: HasMany<typeof Detalle>

}