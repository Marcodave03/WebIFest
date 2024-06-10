import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import FileUpload from "express-fileupload";
import UserRoute from "./routes/UserRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import BookingRoute from "./routes/BookingRoute.js";
import PaymentRoute from "./routes/BookingRoute.js";
import FacilityRoute from "./routes/FacilityRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(AdminRoute);
app.use(FacilityRoute);
app.use(BookingRoute);
app.use(PaymentRoute);
app.use(CustomerRoute);
store.sync();
app.listen(5000, () => console.log("Server up and running..."));
