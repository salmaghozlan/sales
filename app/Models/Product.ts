import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "brand_id", })
  public brandId: number

  @column({ serializeAs: "coupon_id", })
  public couponId: number

  @column({ serializeAs: "categories_id", })
  public categoriesId: number

  @column({ serializeAs: "name", })
  public name: string

  @column({ serializeAs: "price", })
  public price: number

  @column({ serializeAs: "quantity", })
  public quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
