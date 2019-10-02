"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Category = use("App/Models/Category");

class CategoryController {
  async create({ request, response }) {
    const category = await Category.create(request.only(["name"]));
    return response.created(category);
  }

  async getAll() {
    return Category.all();
  }
}

module.exports = CategoryController;
