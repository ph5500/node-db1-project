const knex = require("knex");

// change to "production" and update knexfile.js to use postgres.
const configOptions = require("../knexfile.js");

const database = "development";

module.exports = knex(configOptions[database]);
