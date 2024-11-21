import pool from "../pg.js";
import { UtilsCrud } from "./utils_crud.js";

export const ApiProduto = (app, point) => {

    function getAllProdutoByCategoria(app, point) {
        app.get(`/${point}/get-all-produto-by-categoria`, async (req, res) => {
            const { produtoCategoria } = req.query;  
            
            try {

                const result = await pool.query(
                    'SELECT * FROM produto WHERE produtocategoria = $1',
                    [produtoCategoria]  
                );

                if (result.rows.length > 0) {
      
                    res.status(200).json(result.rows);  
                } else {
                    res.status(404).send('Produto não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao verificar Produto:', error);
                res.status(500).send('Erro no servidor');
            }
        });
    }

    function getAllProduto(app, point) {
        app.get(`/${point}/get-all-produto`, async (req, res) => {
            try {
                const result = await pool.query('SELECT * FROM produto');
                
                if (result.rows.length > 0) {
                    res.status(200).json(result.rows);  // Retorna todos os produtos
                } else {
                    res.status(404).send('Nenhum produto encontrado.');
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                res.status(500).send('Erro no servidor');
            }
        });
    }

    // Rota POST para adicionar um novo produto
    function addProduto(app, point) {
        app.post(`/${point}/add-produto`, async (req, res) => {
            const { produtocodigo, produtodescricao, produtopreco, produtoestoque, produtocategoria } = req.body;

            if (!produtocodigo || !produtodescricao || !produtopreco || !produtoestoque || !produtocategoria) {
                return res.status(400).send('Todos os campos são obrigatórios.');
            }

            try {
                const result = await pool.query(
                    'INSERT INTO produto (produtocodigo, produtodescricao, produtopreco, produtoestoque, produtocategoria) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                    [produtocodigo, produtodescricao, produtopreco, produtoestoque, produtocategoria]
                );

                res.status(201).json(result.rows[0]);  // Retorna o produto recém-adicionado
            } catch (error) {
                console.error('Erro ao adicionar produto:', error);
                res.status(500).send('Erro no servidor');
            }
        });
    }

    function deleteProduto(app, point) {
        app.delete(`/${point}/delete-produto/:produtocodigo`, async (req, res) => {
            const { produtocodigo } = req.params; // Obtendo o código do produto da URL
    
            if (!produtocodigo) {
                return res.status(400).send('O código do produto é obrigatório.');
            }
    
            try {
                const result = await pool.query(
                    'DELETE FROM produto WHERE produtocodigo = $1 RETURNING *',
                    [produtocodigo]
                );
    
                if (result.rowCount > 0) {
                    res.status(200).send('Produto excluído com sucesso.');
                } else {
                    res.status(404).send('Produto não encontrado.');
                }
            } catch (error) {
                console.error('Erro ao deletar produto:', error);
                res.status(500).send('Erro no servidor');
            }
        });
    }

    addProduto(app, point);
    getAllProduto(app, point);
    getAllProdutoByCategoria(app, point);
    deleteProduto(app, point);  
};
