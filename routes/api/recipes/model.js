const db = require('../../../data/dbConfig')

const find = () => db('recipes')

module.exports = { find }
