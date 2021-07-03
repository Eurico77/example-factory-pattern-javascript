const { Router } = require('express');
const EntityFacoty = require('./factory/entity-factory');
const routes = Router();

routes.post('/entity', async (req, res) => {
  const entityFactory = await EntityFacoty.createInstance();
  const data = req.body;

  const entity = await entityFactory.create(data);
  return res.status(201).json(entity);
});

module.exports = routes;
