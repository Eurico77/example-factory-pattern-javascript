module.exports = class EntityService {
  constructor({ entityRepository, userModel }) {
    this.entityRepository = entityRepository;
    this.userModel = userModel;
  }

  async create(data) {
    const record = await this.entityRepository.create(data);
    const entity = this.userModel.from(record);
    return entity;
  }
};
