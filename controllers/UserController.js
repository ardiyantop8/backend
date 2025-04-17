import User from "../models/UserModel.js";
import moment from "moment-timezone"; // install moment-timezone

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const createUser = async (req, res) => {
    try {
        const jakartaTime = moment().tz("Asia/Jakarta").format(); // ambil waktu Jakarta
        console.log(jakartaTime);
        await User.create({
            ...req.body,
            createdAt: jakartaTime, // set createdAt
            updatedAt: jakartaTime // set updatedAt
        });
        res.status(201).json({msg: "user has been created"});
    } catch (error) {
        console.log(error.message);
    }
}
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "user has been updated"});
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "user has been deleted"});
    } catch (error) {
        console.log(error.message);
    }
}