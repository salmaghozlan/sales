import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'brands'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 50).notNullable()
      table.integer('coupon_id').unsigned()
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
