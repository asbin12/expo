import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import userRoute from "./routes/userRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import connectDb from "./config/ConnectDb.js";
import bodyParser from "body-parser";

const app = express();

// Config dot env files
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Create express app

// Middleware
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
// app.use(cors());

// Routes
// User routes
app.use("/users", userRoute);

// Transaction routes
app.use("/transaction", transactionRoute);

// DB connection
connectDb();

// Port
const PORT = 8080 || process.env.PORT;

// Listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
