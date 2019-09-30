'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchedulesSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = SchedulesSchema
