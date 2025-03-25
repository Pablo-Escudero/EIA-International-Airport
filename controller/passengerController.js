const { Passenger } = require('../models');

const passengerController = {
  async getAll(req, res) {
    try {
      const passengers = await Passenger.findAll();
      res.json(passengers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const passenger = await Passenger.findByPk(req.params.id);
      if (!passenger) return res.status(404).json({ message: 'Pasajero no encontrado' });
      res.json(passenger);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newPassenger = await Passenger.create(req.body);
      res.status(201).json(newPassenger);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const passenger = await Passenger.findByPk(req.params.id);
      if (!passenger) return res.status(404).json({ message: 'Pasajero no encontrado' });

      await passenger.update(req.body);
      res.json(passenger);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const passenger = await Passenger.findByPk(req.params.id);
      if (!passenger) return res.status(404).json({ message: 'Pasajero no encontrado' });

      await passenger.destroy();
      res.json({ message: 'Pasajero eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = passengerController;
