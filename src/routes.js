const express = require("express")
const router = express.Router()

// Categories
const CategoryController = require('./controllers/CategoryController')
router.get('/categories', CategoryController.search)
router.get('/categories/:id', CategoryController.read)
router.post('/categories', CategoryController.create)
router.put('/categories/:id', CategoryController.update)
router.delete('/categories/:id', CategoryController.delete)

// Sizes
const SizesController = require('./controllers/SizesController')
router.get('/sizes', SizesController.search)
router.get('/sizes/:id', SizesController.read)
router.post('/sizes', SizesController.create)
router.put('/sizes/:id', SizesController.update)
router.delete('/sizes/:id', SizesController.delete)

// Colors
const ColorsController = require('./controllers/ColorsController')
router.get('/colors', ColorsController.search)
router.get('/colors/:id', ColorsController.read)
router.post('/colors', ColorsController.create)
router.put('/colors/:id', ColorsController.update)
router.delete('/colors/:id', ColorsController.delete)

// Collections
const Collections = require('./controllers/CollectionsController')
router.get('/collections', Collections.search)
router.get('/collections/:id', Collections.read)
router.post('/collections', Collections.create)
router.put('/collections/:id', Collections.update)
router.delete('/collections/:id', Collections.delete)

module.exports = router