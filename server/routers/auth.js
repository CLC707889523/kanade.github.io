const userCtrl = require('../controllers/userCtrl')
const router = require('express')

// user
router.post('/loginByUserName', userCtrl.loginByUserName)
router.post('/register', userCtrl.register)
router.post('/loginBytoken', userCtrl.loginByToken)

module.exports = router
