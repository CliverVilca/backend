const mysql = require('mysql2/promise');

// Crear pool de conexiones
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'infouna',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para probar la conexión
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos establecida correctamente');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error.message);
    return false;
  }
}

// Función para ejecutar queries con manejo de errores
async function execute(query, params = []) {
  try {
    const [results] = await pool.execute(query, params);
    return [results];
  } catch (error) {
    console.error('Error ejecutando query:', error.message);
    throw error;
  }
}

// Función para ejecutar queries simples
async function query(sql, params = []) {
  try {
    const [results] = await pool.query(sql, params);
    return [results];
  } catch (error) {
    console.error('Error ejecutando query:', error.message);
    throw error;
  }
}

// Función para cerrar el pool de conexiones
async function closePool() {
  try {
    await pool.end();
    console.log('Pool de conexiones cerrado correctamente');
  } catch (error) {
    console.error('Error cerrando pool de conexiones:', error.message);
  }
}

// Exportar el pool y las funciones
module.exports = {
  pool,
  execute,
  query,
  testConnection,
  closePool
};

// Probar conexión al inicializar
testConnection();