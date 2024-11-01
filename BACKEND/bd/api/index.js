import express from "express";
import cors from "cors";
import {ApiFuncionario} from "./Entidades/ApiFuncionario.js";

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

ApiFuncionario(app, 'funcionario');