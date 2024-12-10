const Purchase = require('../models/Purchase');

class PurchaseService {
  static async create_resource(data) {
    try {
      const new_resource = new Purchase(data);
      return await new_resource.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAll() {
    try {
      return await Purchase.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async get_by_user(name) {
    try {
      return await Purchase.find({ buyer: name }).populate('buyer', 'name mail');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update_resource(name, data) {
    try {
      return await Purchase.findOneAndUpdate({ buyer: name }, data, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async delete_resource(name) {
    try {
      return await Purchase.findOneAndDelete({ buyer: name });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PurchaseService;
