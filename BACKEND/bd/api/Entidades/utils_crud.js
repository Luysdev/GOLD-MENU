import pool from "../pg.js"; 

export const UtilsCrud = (app, point) => {
    
    /**
     * document
     */
    function UtilsPost() {
        app.post(`/${point}`, async (req, res) => {
            
            const requestData = req.body.data || req.body; 

            const dataArray = Array.isArray(requestData) ? requestData : [requestData];

            if (dataArray.length === 0) {
                return res.status(400).json({ error: 'Dados inválidos fornecidos' });
            }
    
            try {
                const keys = Object.keys(dataArray[0]); 
                const values = dataArray.map(item => keys.map(key => item[key]));
                
                const query = `
                    INSERT INTO ${point} (${keys.join(', ')}) 
                    VALUES ${values.map((_, index) => `(${keys.map((_, i) => `$${index * keys.length + i + 1}`).join(', ')})`).join(', ')} 
                    RETURNING *`;
    
                const flatValues = values.flat();
                const result = await pool.query(query, flatValues);
                res.status(201).json(result.rows);
                
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: `Erro ao criar ${point}` });
            }
        });
    }

    // READ (GET - listar todas os registros)
    function UtilsGetAll() {
        app.get(`/${point}`, async (req, res) => {
            try {
                const result = await pool.query(`SELECT * FROM ${point}`);
                res.status(200).json(result.rows);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: `Erro ao listar ${point}` });
            }
        });
    };
    
    // GET (obter um registro por ID)
    function UtilsGetById() {
        app.get(`/${point}/:id`, async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query(`SELECT * FROM ${point} WHERE mesacodigo = $1`, [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: `${point} não encontrada` });
                }
                res.status(200).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: `Erro ao buscar ${point}` });
            }
        });
    }

    // UPDATE (PUT - atualizar um registro por código)
    function UtilsUpdate() {
        app.put(`/${point}/:id`, async (req, res) => {
            const { id } = req.params;
            const { mesastatus, mesanumero } = req.body;

            // Validação de entrada
            if (typeof mesastatus === 'undefined' || typeof mesanumero === 'undefined') {
                return res.status(400).json({ error: 'Dados inválidos fornecidos' });
            }

            try {
                const result = await pool.query(
                    `UPDATE ${point} SET mesastatus = $1, mesanumero = $2 WHERE mesacodigo = $3 RETURNING *`,
                    [mesastatus, mesanumero, id]
                );
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: `${point} não encontrada` });
                }
                res.status(200).json(result.rows[0]);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: `Erro ao atualizar ${point}` });
            }
        });
    }

    // DELETE (DELETE - remover um registro por código)
    function UtilsDelete() {
        app.delete(`/${point}/:id`, async (req, res) => {
            const { id } = req.params;
            try {
                const result = await pool.query(`DELETE FROM ${point} WHERE mesacodigo = $1 RETURNING *`, [id]);
                if (result.rows.length === 0) {
                    return res.status(404).json({ error: `${point} não encontrada` });
                }
                res.status(200).json({ message: `${point} removida com sucesso` });
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: `Erro ao deletar ${point}` });
            }
        });
    }
        
    UtilsPost();
    UtilsGetAll();
    UtilsGetById();
    UtilsUpdate();
    UtilsDelete();
}

