import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('phone', 20).notNullable()
      table.string('address_line1', 255).notNullable()
      table.string('address_line2', 255)
      table.integer('city_id').unsigned()
      table.integer('country_id').unsigned()
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
