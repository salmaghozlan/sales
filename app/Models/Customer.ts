import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "first_name", })
  public firstName: string

  @column({ serializeAs: "last_name", })
  public lastName: string
  
  @column({ serializeAs: "email", })
  public email: string
  
  @column({ serializeAs: "address_line1", })
  public addressLine1: string
  
  @column({ serializeAs: "address_line2", })
  public addressLine2: string
  
  @column({ serializeAs: "city_id", })
  public cityId: number
  
  @column({ serializeAs: "country_id", })
  public countryId: number

  @column({ serializeAs: "phone", })
  public phone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
