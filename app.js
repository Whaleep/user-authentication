const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const routes = require('./routes/login')
require('./config/mongoose')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('123456789'))
app.use(routes)


app.listen(3000, () => {
  console.log('Express is listening on http://localhost:3000')
})
