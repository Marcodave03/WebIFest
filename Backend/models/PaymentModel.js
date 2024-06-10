import { DataTypes } from "sequelize";

const Payment = {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_type: { type: DataTypes.STRING, allowNull: true },
  amount: { type: DataTypes.STRING, allowNull: true },
  payment_date: { type: DataTypes.DATE, allowNull: true },
};

export default Payment;
