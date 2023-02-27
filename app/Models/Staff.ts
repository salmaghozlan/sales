import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo,HasMany,hasMany, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
export default class Staff extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "first_name", })
  public firstName: string

  @column({ serializeAs: "last_name", })
  public lastName: string
  
  @column({ serializeAs: "email", })
  public email: string

  @column({ serializeAs: "active", })
  public active: number

  @column({ serializeAs: "store_id", })
  public storeId: number

  @hasMany(()=> Order)
  public order: HasMany<typeof Order>

}

