import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConnection from "./connections/db.connection.js";
import allRoutes from "./routes/index.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api", allRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  dbConnection();
  console.log(`Server listening on port ${PORT} 👍`);
});
