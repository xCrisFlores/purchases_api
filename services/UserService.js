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

  static async get_by_name(_id) {
    try {
      return await User.find({_id: _id});
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update_resource(_id, data) {
    try {
      return await User.findOneAndUpdate(_id, data, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async delete_resource(_id) {
    try {
      return await User.findOneAndDelete(_id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;
