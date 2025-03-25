const { AirportService } = require('../models');

const airportServiceController = {
  async getAll(req, res) {
    try {
      const services = await AirportService.findAll();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const service = await AirportService.findByPk(req.params.id);
      if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });
      res.json(service);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const newService = await AirportService.create(req.body);
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const service = await AirportService.findByPk(req.params.id);
      if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });

      await service.update(req.body);
      res.json(service);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const service = await AirportService.findByPk(req.params.id);
      if (!service) return res.status(404).json({ message: 'Servicio no encontrado' });

      await service.destroy();
      res.json({ message: 'Servicio eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = airportServiceController;
