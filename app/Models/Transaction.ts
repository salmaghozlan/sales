import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column({ serializeAs: "type", })
  public type: string

  @column({ serializeAs: "amount", })
  public amount: number

@column({ serializeAs: "status", })
  public status: string
  
  
  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "driver_id", })
  public driverId: number

  @column({ serializeAs: "order_id", })
  public orderId: number

  @column({ serializeAs: "payment_method_id", })
  public paymentMethodId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
