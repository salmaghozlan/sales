import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Driver extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "user_id", })
  public userId: number

  @column({ serializeAs: "availability", })
  public availability: boolean

  @column({ serializeAs: "performance", })
  public performance: number

  @column({ serializeAs: "latitude", })
  public latitude: number

  @column({ serializeAs: "longitude", })
  public longitude: number

  @column({ serializeAs: "speed", })
  public speed: number

  @column({ serializeAs: "direction", })
  public direction: number

  @column({ serializeAs: "distance_traveled", })
  public distance_traveled: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
