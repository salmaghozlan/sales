import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number
 
  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "order_id", })
  public orderId: number

  @column({ serializeAs: "product_id", })
  public productId: number

  @column({ serializeAs: "quantity", })
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
