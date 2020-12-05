const express = require('express')

const UserCtrl = require('../controllers/user-ctrl.js')

const router = express.Router()

router.post('/user', UserCtrl.newUser)
router.get('/users', UserCtrl.index)
router.get('/user/:username', UserCtrl.getUserByUsername)
router.put('/user/:username', UserCtrl.updateUser)

module.exports = router