import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column({ serializeAs: "first_name"} )
  public firstName: string

  @column({ serializeAs: "last_name", })
  public lastName: string

  @column({ serializeAs: "user_name", })
  public userName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column({ serializeAs: "phone", })
  public phone: number

  @column({ serializeAs: "birth_date", })
  public birthDate: DateTime

  @column({ serializeAs: "national_id_number", })
  public nationalIdNumber: number

  @column({ serializeAs: "state_province", })
  public stateProvince: string
  
  @column({ serializeAs: "city", })
  public city: string

  @column({ serializeAs: "postal_code", })
  public postalCode: number

  @column({ serializeAs: "address1", })
  public address1: string

  @column({ serializeAs: "address2", })
  public address2: string

  @column({ serializeAs: "role_as", })
  public roleAs: number


  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
