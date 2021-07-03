module.exports = class UserModel {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  static from(data) {
    return new this(data);
  }
};
