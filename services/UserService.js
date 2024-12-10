const User = require('../models/User');

class UserService {
  static async create_resource(data) {
    try {
      const new_resource = new User(data);
      return await new_resource.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAll() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async get_by_name(name) {
    try {
      return await User.findOne(name);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update_resource(name, data) {
    try {
      return await User.findOneAndUpdate(name, data, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async delete_resource(name) {
    try {
      return await User.findOneAndDelete(name);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
