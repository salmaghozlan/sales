import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Brand extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "brand_name", })
  public brandName: string


  
}
