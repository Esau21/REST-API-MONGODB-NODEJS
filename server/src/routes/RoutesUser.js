const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();



router.get('/usuarios', UserController.GetUsuarios);
router.get('/usuarios/:id', UserController.FindByIdUsuers);
router.post('/agreeusuarios', UserController.AgreeUsers);
router.put('/updateuser/:id', UserController.UpdateUsers);
router.delete('/deleteuser/:id', UserController.DeleteUser);






module.exports = router;