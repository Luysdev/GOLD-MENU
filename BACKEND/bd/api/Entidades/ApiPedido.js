
import pool from "../pg.js";
import { UtilsCrud } from "./utils_crud.js";

export const ApiPedido = (app, point) => {

    // Criar um pedido
    app.post('/pedido', async (req, res) => {
    const { pedidocodigo, pedidohora, pedidoobservacao, pedidovalortotal, pedidoStatus } = req.body;

    try {
        const result = await pool.query(
        `INSERT INTO Pedido (pedidocodigo, pedidohora, pedidoobservacao, pedidovalortotal, pedidoStatus)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [pedidocodigo, pedidohora, pedidoobservacao, pedidovalortotal, pedidoStatus]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).send('Erro ao criar pedido.');
    }
    });

    // Ler todos os pedidos
    app.get('/pedido', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Pedido');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).send('Erro ao buscar pedidos.');
    }
    });

    // Ler um pedido específico
    app.get('/pedido/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM Pedido WHERE pedidocodigo = $1', [id]);
        if (result.rows.length === 0) {
        return res.status(404).send('Pedido não encontrado.');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).send('Erro ao buscar pedido.');
    }
    });

    // Atualizar um pedido
    app.put('/pedido/:id', async (req, res) => {
    const { id } = req.params;
    const { pedidohora, pedidoobservacao, pedidovalortotal, pedidoStatus } = req.body;

    try {
        const result = await pool.query(
        `UPDATE Pedido
        SET pedidohora = $1, pedidoobservacao = $2, pedidovalortotal = $3, pedidoStatus = $4
        WHERE pedidocodigo = $5 RETURNING *`,
        [pedidohora, pedidoobservacao, pedidovalortotal, pedidoStatus, id]
        );

        if (result.rows.length === 0) {
        return res.status(404).send('Pedido não encontrado.');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).send('Erro ao atualizar pedido.');
    }
    });

    // Atualizar o status de um pedido
    app.patch('/pedido/:id/status', async (req, res) => {
    const { id } = req.params;
    const { pedidoStatus } = req.body;

    if (![1, 2, 3].includes(pedidoStatus)) {
        return res.status(400).send('Status inválido. Use 1, 2 ou 3.');
    }

    try {
        const result = await pool.query(
        `UPDATE Pedido
        SET pedidoStatus = $1
        WHERE pedidocodigo = $2 RETURNING *`,
        [pedidoStatus, id]
        );

        if (result.rows.length === 0) {
        return res.status(404).send('Pedido não encontrado.');
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar status do pedido:', error);
        res.status(500).send('Erro ao atualizar status do pedido.');
    }
    });

    // Deletar um pedido
    app.delete('/pedido/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM Pedido WHERE pedidocodigo = $1 RETURNING *', [id]);

        if (result.rows.length === 0) {
        return res.status(404).send('Pedido não encontrado.');
        }
        res.status(200).json({ message: 'Pedido deletado com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar pedido:', error);
        res.status(500).send('Erro ao deletar pedido.');
    }
    });

    app.get('/pedidos/status/2', async (req, res) => {
        try {
          const pedidos = await pool.query(`
            SELECT 
                p.pedidocodigo AS pedido_id,
                p.pedidohora AS hora,
                p.pedidoobservacao AS observacao,
                p.pedidovalortotal AS total,
                c.carrinhocodigo AS carrinho_id,
                cp.produtocodigo AS produto_id,
                cp.quantidade AS quantidade,
                pr.produtodescricao AS produto_nome,
                pr.produtopreco AS preco_unitario
            FROM Pedido p
            LEFT JOIN Carrinho c ON p.pedidocodigo = c.pedidocodigo
            LEFT JOIN Carrinho_Produto cp ON c.carrinhocodigo = cp.carrinhocodigo
            LEFT JOIN Produto pr ON cp.produtocodigo = pr.produtocodigo
            WHERE p.pedidoStatus = 2;
          `);

          res.json(pedidos.rows); // Retorna os pedidos como JSON
          
        } catch (error) {
          console.error("Erro ao buscar pedidos com status 2:", error);
          res.status(500).send("Erro ao buscar pedidos");
        }
      });
      
}