import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'drivers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('phone', 20).notNullable().unique()
      table.boolean('availability').notNullable().defaultTo(true)
      table.integer('performance').notNullable().defaultTo(0)
      table.double('latitude', 8, 5).nullable()
      table.double('longitude', 8, 5).nullable()
      table.double('speed', 8, 2).nullable()
      table.double('direction', 8, 2).nullable()
      table.double('distance_traveled', 8, 2).notNullable().defaultTo(0)
      table.timestamps(true,true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
