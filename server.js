const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Налаштування CORS
app.use(cors());

// Налаштування bodyParser для отримання JSON-запитів
app.use(bodyParser.json());

// Підключення до MySQL
const db = mysql.createConnection({
  host: 'localhost',   // або IP адреса твого сервера MySQL
  user: 'root',        // ім'я користувача для доступу до бази даних
  password: '1234',        // пароль для доступу до бази даних
  database: 'flowerslife',  // ім'я твоєї бази даних
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Обробка POST запиту для форми
app.post('/contact', (req, res) => {
  const { name, phone, message } = req.body;

  // SQL запит для вставлення даних
  const query = 'INSERT INTO T_CUSTOMERS (NAME_CUSTOMER, PHONE_CUSTOMER, MESSAGE_CUSTOMER, WRITE_INFO) VALUES (?, ?, ?, NOW())';
  db.query(query, [name, phone, message], (err, result) => {
    if (err) {
      console.error('MySQL error details:', {
        code: err.code,
        errno: err.errno,
        sqlMessage: err.sqlMessage,
        sqlState: err.sqlState,
        sql: err.sql
      });
      return res.status(500).json({ 
        message: 'Database error',
        error: err.sqlMessage 
      });
    }
    
    console.log('Insert result:', result);
    res.json({ message: 'Data inserted successfully' });
  });
}); // This closing parenthesis and bracket were missing

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Fixed template literal syntax
});