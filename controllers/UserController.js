// controllers/userController.js
const UserService = require('../services/UserService');

class UserController {
  static async create_user(req, res) {
    try {
      const { name, mail, password } = req.body;
      const new_user = await UserService.create_resource({ name, mail, password });
      res.status(201).json(new_user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get_users(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get_user_by_name(req, res) {
    try {
      const user = await UserService.get_by_name(req.params._id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async update_user(req, res) {
    try {
      const user = await UserService.update_resource(req.params._id, req.body);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async delete_user(req, res) {
    try {
      const user = await UserService.delete_resource(req.params._id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;
