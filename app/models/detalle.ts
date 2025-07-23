import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/orm'
import Pedido from './pedido.js'

export default class Detalle extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({columnName:'id_pedido'})
  declare id_pedido: number

  @column({columnName:'id_producto'})
  declare id_producto: number

  @column({columnName:'nombre_pedido'})
  declare nombre_pedido: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Pedido)
  declare pedido: BelongsTo<typeof Pedido>
}