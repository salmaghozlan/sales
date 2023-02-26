import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "customer_name", })
  public customerName: string

  @column({ serializeAs: "order_status", })
  public orderStatus: number

  @column({ serializeAs: "store_id", })
  public storeId: number

  @column({ serializeAs: "staff_id", })
  public staffId: number
  
}
