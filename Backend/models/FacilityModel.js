import { DataTypes } from "sequelize";

const Facility = {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  facility_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  facility_name: { type: DataTypes.STRING, allowNull: true },
  desc: { type: DataTypes.STRING, allowNull: true },
};

export default Facility ;
