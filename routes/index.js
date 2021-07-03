const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const error_message_content = `<div class="alert alert-warning my-3" role="alert">Username 或 Password 錯誤</div>`

  User.find({ email: req.body.email, password: req.body.password })
    .lean()
    .then(function (user) {
      if (user.length === 1) {
        res.render('welcome', {name: user[0].firstName})
      } else {
        // console.log('Username 或 Password 錯誤')
        res.render('index', { email: req.body.email, message: error_message_content })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router

