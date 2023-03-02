import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PaymentMethod extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "name", })
  public name: string
  
  
  @column({ serializeAs: "description", })
  public description: string

  @column({ serializeAs: "logo", })
  public logo: string
  
  
  @column({ serializeAs: "status", })
  public status: number
  
   
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
