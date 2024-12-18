const PurchaseService = require("../services/PurchaseService");

class PurchaseController {
  static async create_purchase(req, res) {
    try {
      const { amount, date, buyer } = req.body;
      const new_purchase = await PurchaseService.create_resource({ amount, date, buyer });
      res.status(201).json(new_purchase);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get_purchases(req, res) {
    try {
      const users = await PurchaseService.getAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get_purchases_for_user(req, res) {
    try {
      const user = await PurchaseService.get_by_user(req.params._id);
      if (!user) {
        return res.status(404).json({ message: 'Purchases not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async update_purchases(req, res) {
    try {
      const { _id, amount, date, buyer } = req.body;
      const user = await PurchaseService.update_resource(_id, amount, date, buyer);
      if (!user) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async delete_purchase(req, res) {
    try {
      const user = await PurchaseService.delete_resource(req.params._id);
      if (!user) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.status(200).json({ message: 'Purchase for user deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = PurchaseController;
