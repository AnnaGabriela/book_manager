const request = require("axios");

request.defaults.baseURL = process.env.OPEN_BOOKS_API;

module.exports = { request }