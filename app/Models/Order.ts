import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Staff from './Staff'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "order_status", })
  public orderStatus: number

  @column({ serializeAs: "store_id", })
  public storeId: number

  @column({ serializeAs: "staff_id", })
  public staffId: number

  @belongsTo(() => Staff, {
    foreignKey: 'staffId',
  })
  public staff: BelongsTo<typeof Staff>
  
}
