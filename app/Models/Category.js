"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  procedures() {
    return this.hasMany("App/Models/Procedure");
  }
}

module.exports = Category;
