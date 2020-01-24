const { PORT } = require('./env')
const app = require('express')()
const json = require('express').json()
const apiRouter = require('./routes/api')

app.listen(PORT || 5000, () => {
  console.log(`Listening on port ${PORT}...`)
})

app.use(json)
app.use('/api', apiRouter)
