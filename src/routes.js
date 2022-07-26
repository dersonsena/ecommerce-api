const express = require("express")
const router = express.Router()

const CategoriesModel = require('./models/categories');

router.get('/categories', async (req, res) => {
  try {
    const data = await CategoriesModel.find();
    res.json(data)
  } catch (error){
    res.status(500).json({ message: error.message })
  }
})

router.get('/categories/:id', async (req, res) => {
  try {
    const data = await CategoriesModel.findById(req.params.id);
    res.json(data)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/categories', async (req, res) => {
  const model = new CategoriesModel({ name: req.body.name })

  try {
    await model.save();
    res.status(200).json(model)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.put('/categories/:id', async (req, res) => {
  try {
    const record = await CategoriesModel.findOne({ _id: req.params.id })

    if (req.body.name) {
      record.name = req.body.name
    }

    await record.save()
    res.send(record)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete('/categories/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await CategoriesModel.findByIdAndDelete(id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router