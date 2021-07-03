const connection = require('../../src/config/db/knex');
const UserModel = require('../model/entity-model');
const EntityRepositoy = require('../repositories/entity-repository');
const EntityService = require('../service/entity-serivice');

module.exports = class EntityFacoty {
  static async createInstance() {
    const entityRepository = new EntityRepositoy({
      connection,
      table: 'entity',
    });
    const entityService = new EntityService({
      entityRepository,
      userModel: UserModel,
    });
    return entityService;
  }
};
