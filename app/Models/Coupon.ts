import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  
  @column({ serializeAs: "coupon_code", })
  public couponCode: string

  
  @column({ serializeAs: "discount_amount", })
  public discountAmount: number

  
  @column({ serializeAs: "expiration_date", })
  public expirationDate: DateTime
 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
