import express from "express";
import cors from "cors";
import { Mesa } from "./Entidades/crud_mesa.js"
import { UtilsCrud } from "./Entidades/utils_crud.js";

const createApp = () => {
  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(cors());

  expressApp.listen(3333, () => {
    console.log("Server is running on http://localhost:3333");
  });
  return expressApp; 
};

const app = createApp(); 

UtilsCrud(app, 'mesa');
UtilsCrud(app, 'funcionario');