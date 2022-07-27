const Model = require('../models/Collection');

module.exports = {
  read: async (req, res) => {
    try {
      const data = await Model.findById(req.params.id);
      res.json(data)
    } catch(error) {
      res.status(500).json({ message: error.message })
    }
  },
  search: async (req, res) => {
    try {
      const data = await Model.find();
      res.json(data)
    } catch (error){
      res.status(500).json({ message: error.message })
    }
  },
  create: async (req, res) => {
    const model = new Model({ name: req.body.name })

    try {
      await model.save();
      res.status(200).json(model)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  update: async (req, res) => {
    try {
      const record = await Model.findOne({ _id: req.params.id })

      if (req.body.name) {
        record.name = req.body.name
      }

      await record.save()
      res.send(record)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Model.findByIdAndDelete(id)
      res.status(204).send()
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
}
