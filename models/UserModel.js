import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
    'users',
    {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        password: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default User;

(async () => {
    await db.sync();
})();