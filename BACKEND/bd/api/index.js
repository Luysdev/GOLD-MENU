import express from "express"
import cors from "cors"

export const app = () => {
    const expressApp = express();
    expressApp.use(express.json());
    expressApp.use(cors());
    expressApp.listen(3333);
    return expressApp;
} 

