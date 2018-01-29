const express = require('express')
const dbc = require('./controllers/dbcController')
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/assets', express.static('public'))
app.use('/', dbc)

app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
