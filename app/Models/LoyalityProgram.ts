import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class LoyalityProgram extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column({ serializeAs: "customer_id", })
  public customer_id: number
  
  @column({ serializeAs: "points_balance", })
  public pointsBalance: number
  
  @column({ serializeAs: "rewardsAvailable", })
  public rewardsAvailable: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
