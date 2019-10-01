'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProceduresSchema extends Schema {
  up () {
    this.create('procedures', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.string('name', 80).notNullable()
      table.string('time', 80).notNullable()
      table.decimal('value').notNullable()
      table.string('description', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('procedures')
  }
}

module.exports = ProceduresSchema
