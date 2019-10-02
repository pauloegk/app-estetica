'use strict'

const { test, trait } = use('Test/Suite')('Register')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('register user valid', async ({ client }) => {
  // await User.create({
  //   username: 'Pauloegk',
  //   email: 'pauloegk@gmail.com',
  //   password: '1234567'
  // })

  // const response = await client.get('/posts').end()
  // response.assertStatus(200)
});

