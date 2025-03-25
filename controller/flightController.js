const { Flight } = require('../models');

const flightController = {
  async getAll(req, res) {
    try {
      const flights = await Flight.findAll();
      res.json(flights);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const flight = await Flight.findByPk(req.params.id);
      if (!flight) return res.status(404).json({ message: 'Vuelo no encontrado' });
      res.json(flight);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newFlight = await Flight.create(req.body);
      res.status(201).json(newFlight);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const flight = await Flight.findByPk(req.params.id);
      if (!flight) return res.status(404).json({ message: 'Vuelo no encontrado' });

      await flight.update(req.body);
      res.json(flight);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const flight = await Flight.findByPk(req.params.id);
      if (!flight) return res.status(404).json({ message: 'Vuelo no encontrado' });

      await flight.destroy();
      res.json({ message: 'Vuelo eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = flightController;
