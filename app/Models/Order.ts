import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column({ serializeAs: "customer_id", })
  public customerId: number

  @column({ serializeAs: "order_date", })
  public orderDate: DateTime

  @column({ serializeAs: "required_date", })
  public requiredDate: DateTime

  
  @column({ serializeAs: "shipped_date", })
  public shippedDate: DateTime

  
  @column({ serializeAs: "comments", })
  public comments: string

  @column({ serializeAs: "coupon_id", })
  public couponId: number

  @column({ serializeAs: "status", })
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
