const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/', async (req, res) => {
  const recipes = await db.find()
  res.json(recipes)
})
