const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const GetUsuarios = (req, res) => {
    User.find((err, users) => {
        if(!err) {
            res.status(200).json(users);
        } else {
            res.status(400).send(err.message);
        }
    });
}


const FindByIdUsuers = (req, res) => {
    User.findById(req.params.id,(err, usersall) => {
        if(!err) {
            res.status(200).json(usersall);
        } else {
            res.status(400).send(err.message);
        }
    });
}


const AgreeUsers = async (req, res) => {
    const { nombre, email, carnet, password, confirmpassword, edad, pais } = req.body;
    const PasswordHashed = await bcrypt.hash(password, 10);
    const ConfirmPasswordHashed = await bcrypt.hash(confirmpassword, 10);

    const datauser = new User({
        nombre,
        email,
        carnet,
        password: PasswordHashed,
        confirmpassword: ConfirmPasswordHashed,
        edad,
        pais,
    });

    try {
        const datasave = await datauser.save();
        res.status(200).json(datasave);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const UpdateUsers = async (req, res) => {
    console.log(req.body);
    const { nombre, email, carnet, password, confirmpassword, edad, pais  } = req.body;
    const PasswordHashed = await bcrypt.hash(password, 10);
    const ConfirmPasswordHashed = await bcrypt.hash(confirmpassword, 10);
    const id = req.params.id;
    const dataproductosupdate = ({
        nombre,
        email,
        carnet,
        password: PasswordHashed,
        confirmpassword: ConfirmPasswordHashed,
        edad,
        pais,
    });
    const opciones = { opciones: true };
    try {
        const updateuser = await User.findByIdAndUpdate(id, dataproductosupdate, opciones);
        res.status(200).json(updateuser);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
    
}


const DeleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteuser = await User.findByIdAndDelete(id);
        if(deleteuser){
            res.json({ Status: 'Usuario Eliminado con exito :D' });
        } else {
            res.status(400).send(err.message);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = { GetUsuarios, FindByIdUsuers, AgreeUsers, UpdateUsers, DeleteUser };