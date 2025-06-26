import express from "express";
import IndexRouter from "./routes/index.route.js";
import UserRouter from "./routes/user.route.js";
import ServicesRouter from "./routes/product.route.js";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.set("view engine","ejs");
app.use(session({
    secret: "some-secret",
    resave: false,
    saveUninitialized: true
}));


app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use("/user",UserRouter);
app.use("/services",ServicesRouter);
app.use("/",IndexRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Started....");
});