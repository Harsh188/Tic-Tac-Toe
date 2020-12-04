const express = require('express')

const UserCtrl = require('../controllers/user-ctrl.js')

const router = express.Router()

router.post('/user', UserCtrl.newUser)

module.exports = router