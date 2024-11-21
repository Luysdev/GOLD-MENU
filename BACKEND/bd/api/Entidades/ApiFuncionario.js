import { UtilsCrud } from "./utils_crud.js"
import pool from "../pg.js"; 

export const ApiFuncionario = (app, point) => {

    function getFuncionarioByCpf(point) {
        app.post(`/${point}/verificar-funcionario`, async (req, res) => {
          const { cpf } = req.body;
        
          try {
            const result = await pool.query(
              'SELECT * FROM funcionario WHERE funccpf = $1',
              [cpf]
            );
        
            if (result.rows.length > 0) {
              const usuario = result.rows[0];
              res.status(200).json(usuario); 
            } else {
              res.status(404).send('Funcionario não encontrado.');
            }
          } catch (error) {
            console.error('Erro ao verificar CPF:', error);
            res.status(500).send('Erro no servidor');
          }
        });
      }
    //UtilsCrud
    getFuncionarioByCpf(point);

}    