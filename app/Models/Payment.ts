import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "transaction_id", })
  public transactionId: number

  @column({ serializeAs: "payment_method_id", })
  public paymentMethodId: number

  @column({ serializeAs: "amount_paid", })
  public amountPaid: number

  @column({ serializeAs: "date_of_payment", })
  public dateOfPayment: number

  @column({ serializeAs: "check_number", })
  public checkNumber: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
