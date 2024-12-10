// routes/routes.js
const express = require('express');
const UserController = require('../controllers/UserController');
const PurchaseController = require('../controllers/PurchaseController');
const router = express.Router();

// Corregir las rutas añadiendo el prefijo '/' al inicio
router.post('/users', UserController.create_user);  // Cambié get_users por create_user
router.get('/users', UserController.get_users);     // Cambié get_users por get_users
router.get('/users/:name', UserController.get_user_by_name);
router.put('/users/:name', UserController.update_user);
router.delete('/users/:name', UserController.delete_user);

router.post('/purchases', PurchaseController.create_purchase);  // Cambié get_purchases por create_purchase
router.get('/purchases', PurchaseController.get_purchases);
router.get('/purchases/:name', PurchaseController.get_pruchases_for_user);
router.put('/purchases/:name', PurchaseController.update_purchases);
router.delete('/purchases/:name', PurchaseController.delete_purchase);

module.exports = router;
