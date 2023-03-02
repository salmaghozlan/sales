import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Delivery extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "driver_id", })
  public driverId: number

  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "order_id", })
  public orderId: number
  
  @column({ serializeAs: "status", })
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
