import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('user_name',255).notNullable().unique()   
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.integer('phone').unique()
      table.date('birth_date')
      table.integer('national_id_number')
      table.string('state_province')
      table.string('city')
      table.integer('postal_code')
      table.string('address1')
      table.string('address2')
      table.integer('role_as').defaultTo(0)
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true,true);
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
