const express = require('express')

const UserCtrl = require('../controllers/user-ctrl.js')

const router = express.Router()

router.post('/user', UserCtrl.newUser)
router.get('/findUser', UserCtrl.index)

router.put('/user/:username', UserCtrl.updatUser)

module.exports = router