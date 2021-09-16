/**
 * News routes.
 * Global route 'api/news'
 * @module router/news
 */

const NewsController = require('../controllers/news.controller')

const router = require('express').Router()

router.get('/', NewsController.newsList)

module.exports = router