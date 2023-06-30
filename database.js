import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?
    `, [id])
    return rows[0]
  }

export async function createNote(title, contents) {
const [result] = await pool.query(`
INSERT INTO notes (title, contents)
VALUES (?, ?)
`, [title, contents])
const id = result.insertId
return getNote(id)
}

const note = await createNote("ABC","it is a test content")
console.log(note)