'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProceduresSchema extends Schema {
  up () {
    this.create('procedures', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('procedures')
  }
}

module.exports = ProceduresSchema
