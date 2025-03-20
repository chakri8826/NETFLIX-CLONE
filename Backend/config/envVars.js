import dotenv from "dotenv";

dotenv.config();
export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY:process.env.TMDB_API_KEY
};

// console.log("MONGO URI: ", process.env.MONGO_URI);