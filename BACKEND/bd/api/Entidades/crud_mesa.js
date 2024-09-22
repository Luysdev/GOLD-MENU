import pool from "../pg.js"; // Certifique-se de que o pool está corretamente configurado para conectar ao banco de dados

export const Mesa = (app) => {
    
    // CREATE (POST)
    function mesaPost() {
        app.post('/mesa', async (req, res) => {
            const { mesacodigo, mesastatus, mesanumero } = req.body;
            try {
                const result = await pool.query(
                    'INSERT INTO mesa (mesacodigo, mesastatus, mesanumero) VALUES ($1, $2, $3) RETURNING *',
                    [mesacodigo, mesastatus, mesanumero]
                );
                res.status(201).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao criar mesa' });
            }
        });
    };
    
    // READ (GET - listar todas as mesas)
    function mesaGetAll() {
        app.get('/mesa', async (req, res) => {
            try {
                const result = await pool.query('SELECT * FROM mesa');
                res.status(200).json(result.rows);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao listar mesas' });
            }
        });
    };
    
    // READ (GET - listar uma mesa por código)
    function mesaGetById() {
        app.get('/mesa/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query('SELECT * FROM mesa WHERE mesacodigo = $1', [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: 'Mesa não encontrada' });
                }
                res.status(200).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao buscar mesa' });
            }
        });
    };
    
    // UPDATE (PUT - atualizar uma mesa por código)
    function mesaUpdate() {
        app.put('/mesa/:id', async (req, res) => {
            const { id } = req.params;
            const { mesastatus, mesanumero } = req.body;
            try {
                const result = await pool.query(
                    'UPDATE mesa SET mesastatus = $1, mesanumero = $2 WHERE mesacodigo = $3 RETURNING *',
                    [mesastatus, mesanumero, id]
                );
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: 'Mesa não encontrada' });
                }
                res.status(200).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao atualizar mesa' });
            }
        });
    };
    
    // DELETE (DELETE - remover uma mesa por código)
    function mesaDelete() {
        app.delete('/mesa/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query('DELETE FROM mesa WHERE mesacodigo = $1 RETURNING *', [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: 'Mesa não encontrada' });
                }
                res.status(200).json({ message: 'Mesa removida com sucesso' });
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao deletar mesa' });
            }
        });
    };
    
    mesaPost();
    mesaGetAll();
    mesaGetById();
    mesaUpdate();
    mesaDelete();
}

