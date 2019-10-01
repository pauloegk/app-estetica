"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async create() {
    const data = request.only(["name"]);

    const category = new Category();
    category.name = data.name;

    console.log(category);

    await category.save();
  }

  async getAll() {
    return Category.all();
  }
}

module.exports = CategoryController;
