module.exports = class EntityRepositoy {
  constructor({ connection, table }) {
    this.connection = connection;
    this.table = table;
  }
  async create(data) {
    const [entityCreated] = await this.connection(this.table)
      .insert(data)
      .returning('*');
    return entityCreated;
  }
};
