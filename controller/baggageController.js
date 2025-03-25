const { Baggage } = require('../models');

const baggageController = {
  async getAll(req, res) {
    try {
      const baggage = await Baggage.findAll();
      res.json(baggage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await Baggage.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Equipaje no encontrado' });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newItem = await Baggage.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const item = await Baggage.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Equipaje no encontrado' });

      await item.update(req.body);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const item = await Baggage.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Equipaje no encontrado' });

      await item.destroy();
      res.json({ message: 'Equipaje eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = baggageController;
