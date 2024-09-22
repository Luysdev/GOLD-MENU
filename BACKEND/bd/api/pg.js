import pkg from 'pg';
const { Pool } = pkg;

/**
 * Instancia o banco
 */
const pool = new Pool({
    user: 'docker',
    host: 'localhost',
    database: 'polls',
    password: 'docker',
    port: 5432,
});

/**
 * Faz a conexao com o banco
 */
export const ConnectDB = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conectado:', res.rows);
  } catch (err) {
    console.error('Erro ao conectar', err);
  }
};

/**
 * Corta a conexao com o banco
 */
export const closeConnectDB = async () => {
  try {
    await pool.end(); 
    console.log('Sessão encerrada com sucesso');
  } catch (err) {
    console.error('Erro ao encerrar a sessão', err);
  }
};

/**
 * Exporta o pool para uso nas queries
 */
export default pool;
