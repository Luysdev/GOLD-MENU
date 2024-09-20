import "../pg";
import { app } from "../index";

// CREATE 
app.post('/mesa', async (req, res) => {
    const { mesacodigo, mesastatus, mesanumero } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO mesa (mesacodigo, mesastatus, mesanumero) VALUES ($1, $2, $3) RETURNING *',
            [mesacodigo, mesastatus, mesanumero]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar item' });
    }
});

// READ

// UPDATE   

// DELETE 

