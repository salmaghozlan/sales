import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type', 20).notNullable()
      table.decimal('amount').notNullable()
      table.string('status', 20).notNullable()
      table.integer('customer_id').unsigned()
      table.integer('driver_id').unsigned()
      table.integer('order_id').unsigned()
      table.integer('payment_method_id')
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
