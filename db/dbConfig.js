import mysql from "mysql2";

const pool = mysql.createPool({
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB,
    host:process.env.HOST
});

export default pool;