"use strict";

class AuthController {

  async login({ auth, request }) {
    const { email, password } = request.all();
    return await auth.attempt(email, password);
  }

  async logout({ auth }) {
    await auth.logout();
  }
}

module.exports = AuthController;
