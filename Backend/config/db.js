import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async ()=>{
    try {
        // timeOUTMS: Infinity is used to avoid the crashing of the connection after a certain time.
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI,{timeOUTMS: Infinity});
        console.log("MongoDB Connected: "+conn.connection.host);
    } catch (error) {
        console.log("Error connecting to MONGODB: ", error.message);
        process.exit(1); // 1 means error, 0 means success
    }
}

