import pool from "../pg.js"; 

export const ApiCart = (app, point) => {
// **Criar um novo carrinho**
app.post('/carrinho', async (req, res) => {
    const { clienteid, carrinhostatus } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO Carrinho (clienteid, carrinhostatus) VALUES ($1, $2) RETURNING carrinhocodigo',
        [clienteid, carrinhostatus]
      );
  
      const carrinhoId = result.rows[0].carrinhocodigo;
      res.status(201).json({ message: 'Carrinho criado com sucesso!', carrinhoId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar carrinho' });
    }
  });
  
  // **Obter todos os carrinhos**
  app.get('/carrinhos', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM Carrinho');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter carrinhos' });
    }
  });
  
  // **Obter um carrinho específico pelo ID**
  app.get('/carrinho/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('SELECT * FROM Carrinho WHERE carrinhocodigo = $1', [id]);
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Carrinho não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter carrinho' });
    }
  });
  
  // **Atualizar um carrinho (status ou valor)**
  app.put('/carrinho/:id', async (req, res) => {
    const { id } = req.params;
    const { carrinhostatus, carrinhovalor } = req.body;
  
    try {
      const result = await pool.query(
        `UPDATE Carrinho SET carrinhostatus = $1, carrinhovalor = $2 WHERE carrinhocodigo = $3`,
        [carrinhostatus, carrinhovalor, id]
      );
  
      if (result.rowCount > 0) {
        res.status(200).json({ message: 'Carrinho atualizado com sucesso!' });
      } else {
        res.status(404).json({ message: 'Carrinho não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar carrinho' });
    }
  });
  
  // **Excluir um carrinho**
  app.delete('/carrinho/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('DELETE FROM Carrinho WHERE carrinhocodigo = $1', [id]);
  
      if (result.rowCount > 0) {
        res.status(200).json({ message: 'Carrinho excluído com sucesso!' });
      } else {
        res.status(404).json({ message: 'Carrinho não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir carrinho' });
    }
  });
  
  // **Adicionar produto ao carrinho**
  app.post('/carrinho/:id/produto', async (req, res) => {
    const { id } = req.params;
    const { produtocodigo, quantidade } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO Carrinho_Produto (carrinhocodigo, produtocodigo, quantidade)
         VALUES ($1, $2, $3) RETURNING *`,
        [id, produtocodigo, quantidade]
      );
  
      res.status(201).json({ message: 'Produto adicionado ao carrinho com sucesso!', item: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao adicionar produto ao carrinho' });
    }
  });
  
// **Obter produtos do carrinho**
    app.get('/carrinho/:id/produtos', async (req, res) => {
        const { id } = req.params;
    
        try {
        const result = await pool.query(
            `SELECT 
            p.produtocodigo, 
            p.produtodescricao, 
            cp.quantidade, 
            p.produtopreco, 
            (cp.quantidade * p.produtopreco) AS total_por_produto, 
            p.produtoestoque,
            p.produtocategoria
            FROM Carrinho_Produto cp
            JOIN Produto p ON cp.produtocodigo = p.produtocodigo
            WHERE cp.carrinhocodigo = $1`, [id]
        );
    
        res.status(200).json(result.rows); // Enviar os dados para o front-end
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao obter produtos do carrinho' });
        }
  });
}    