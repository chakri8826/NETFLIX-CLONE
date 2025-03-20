// const express = require("express");  COMMON JS
import express from 'express';  // WE HAVE USED   "type": "module", in package.json so import 
import cookieParser from "cookie-parser";
import cors from 'cors';
import path from "path";

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoutes from "./routes/search.route.js";


import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/db.js';
import { protectRoute } from "./middleware/protectRoute.js";


const app = express(); // Create an express app
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json()); // Middleware to parse incoming requests in req.body
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
    console.log("Server Running at http://localhost:"+PORT);
    connectDB();
});
