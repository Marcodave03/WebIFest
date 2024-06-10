import db from "../config/Database.js";
import Users from "../models/UserModel.js";
import Admins from "../models/AdminModel.js";
import Customers from "../models/CustomerModel.js";
import Bookings from "../models/BookingModel.js";
import Facilits from "../models//FacilityModel.js";
import Payments from "../models/FacilityModel.js";

const User = db.define("Users",Users,{
    tableName :"user"
});
const Admin = db.define("Admins",Admins,{
    tableName :"admin"
});
const Customer = db.define("Customers",Customers,{
    tableName :"customer"
});
const Booking = db.define("Bookings",Bookings,{
    tableName :"booking"
});
const Facility = db.define("Facilits",Facilits,{
    tableName :"facility"
});
const Payment = db.define("Payments",Payments,{
    tableName :"payment"
});

User.hasOne(Admin,{
    foreignKey:"user_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Admin.belongsTo(User,{
    foreignKey: "user_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

User.hasOne(Customer,{
    foreignKey:"user_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Customer.belongsTo(User,{
    foreignKey: "user_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Customer.hasMany(Payment,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Payment.belongsTo(Customer,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Customer.hasMany(Facility,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Facility.belongsTo(Customer,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Customer.hasMany(Booking,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Booking.belongsTo(Customer,{
    foreignKey: "customer_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Facility.hasMany(Booking,{
    foreignKey: "facility_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});

Booking.hasMany(Facility,{
    foreignKey: "facilityr_id", 
    onDelete: "CASCADE", 
    onUpdate: "CASCADE"
});


db.sync();
export default db;










    
