const mysql2 = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "study",
  port: 3306,
  connectionLimit: 10,
};

const pool = mysql2.createPool(dbConfig);

const query = async (sql) => {
  const connection = await pool.getConnection();
  const rows = await connection.query(sql);
  connection.release();
  return rows;
};

// 외부에서 사용할 수 있도록 함
module.exports = query;
