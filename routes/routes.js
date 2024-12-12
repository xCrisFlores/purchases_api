const express = require('express');
const UserController = require('../controllers/UserController');
const PurchaseController = require('../controllers/PurchaseController');
const router = express.Router();

router.post('/users', UserController.create_user);  
router.get('/users', UserController.get_users);     
router.get('/users/:_id', UserController.get_user_by_name);
router.put('/users/:_id', UserController.update_user);
router.delete('/users/:_id', UserController.delete_user);
router.post('/users/login', UserController.login); 

router.post('/purchases', PurchaseController.create_purchase);  
router.get('/purchases', PurchaseController.get_purchases);
router.get('/purchases/:_id', PurchaseController.get_purchases_for_user);
router.put('/purchases', PurchaseController.update_purchases);
router.delete('/purchases/:_id', PurchaseController.delete_purchase);

module.exports = router;
