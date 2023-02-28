import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('brand_id').unsigned()
      table.integer('coupon_id').unsigned()
      table.integer('categories_id').unsigned()
      table.string('name', 255).notNullable()
      table.decimal('price', 12, 2).notNullable()
      table.integer('quantity').defaultTo(0)
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
