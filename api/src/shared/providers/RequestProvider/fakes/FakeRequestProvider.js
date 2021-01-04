/* eslint-disable no-unused-vars */
class FakeRequestProvider {
  async get({ url, params = {}, headers = {} }) {
    return {};
  }
}

module.exports = FakeRequestProvider;
