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

  static async get_by_user(_id) {
    try {
      return await Purchase.find({ buyer: _id }).populate('buyer', 'name mail');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update_resource(_id, amount, date, buyer) {
    try {
     
      let updatedData = {
        amount: amount,
        date: date,
        buyer: buyer
      };

      console.log(updatedData);

      return await Purchase.findOneAndUpdate({ _id: _id }, updatedData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async delete_resource(_id) {
    try {
      return await Purchase.findOneAndDelete({ _id: _id });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PurchaseService;
