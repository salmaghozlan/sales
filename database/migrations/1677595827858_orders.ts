import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('customer_id').unsigned()
      table.integer('coupon_id').unsigned()
      table.date('order_date').notNullable()
      table.date('required_date').notNullable()
      table.date('shipped_date')
      table.string('status', 50).notNullable()
      table.text('comments')
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
