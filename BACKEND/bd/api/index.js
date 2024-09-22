import express from "express";
import cors from "cors";
import { Mesa } from "./Entidades/crud_mesa";

export const app = () => {
    const expressApp = express();
    expressApp.use(express.json());
    expressApp.use(cors());
    expressApp.listen(3333, () => {
        console.log("Server is running on http://localhost:3333");
    });

    return expressApp;
};

Mesa(app);
