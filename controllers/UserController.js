import User from "../models/UserModel.js";
import moment from "moment-timezone"; // install moment-timezone

// export const getUsers = async (req, res) => {
//     try {
//         const response = await User.findAll();
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // default ke page 1
        const limit = 10;
        const offset = (page - 1) * limit;

        const response = await User.findAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};
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