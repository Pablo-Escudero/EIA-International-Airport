const { Personnel } = require('../models');

const personnelController = {
  async getAll(req, res) {
    try {
      const personnel = await Personnel.findAll();
      res.json(personnel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const person = await Personnel.findByPk(req.params.id);
      if (!person) return res.status(404).json({ message: 'Personal no encontrado' });
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newPerson = await Personnel.create(req.body);
      res.status(201).json(newPerson);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const person = await Personnel.findByPk(req.params.id);
      if (!person) return res.status(404).json({ message: 'Personal no encontrado' });

      await person.update(req.body);
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const person = await Personnel.findByPk(req.params.id);
      if (!person) return res.status(404).json({ message: 'Personal no encontrado' });

      await person.destroy();
      res.json({ message: 'Personal eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = personnelController;
