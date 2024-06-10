import { DataTypes } from "sequelize";

const Admin = {
  admin_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
};

export default Admin;