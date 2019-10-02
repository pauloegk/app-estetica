"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Category = use("App/Models/Category");

const { test, trait } = use("Test/Suite")("Category");

trait("Test/ApiClient");

test("create category", async ({ client }) => {
  const response = await client
    .post("/api/categories")
    .send({
      name: "Corporal"
    })
    .end();

  response.assertStatus(201);
  response.assertJSONSubset({
    name: "Corporal"
  });
});

test("get all categories", async ({ client }) => {
  const response = await client.get("/api/categories").end();
  response.assertStatus(200);
  console.log(response)
});
