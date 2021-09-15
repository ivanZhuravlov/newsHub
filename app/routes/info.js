/**
 * Info routes.
 * Global route 'api/info'
 * @module router/info
 */

const InfoController = require('../controllers/info.controller')

const router = require('express').Router()

router.get('/', InfoController.getInfo)

module.exports = router
