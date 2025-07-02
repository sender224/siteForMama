const mysql = require("mysql2/promise");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const connection = await mysql.createConnection({
   host: '13.53.200.62',   // або IP адреса твого сервера MySQL
  user: 'root_nik',        // ім'я користувача для доступу до бази даних
  password: '123qweasd',        // пароль для доступу до бази даних
  database: 'mama_site',  // ім'я твоєї бази даних
  });

  const { name, phone, message } = req.body;

  try {
    await connection.execute("INSERT INTO T_CUSTOMERS (NAME_CUSTOMER, PHONE_CUSTOMER, MESSAGE_CUSTOMER, WRITE_INFO) VALUES (?, ?, ?, NOW())", [name, phone, message]);
    res.status(200).json({ message: "Записано успішно!" });
  } catch (err) {
    res.status(500).json({ error: "Помилка при записі", details: err });
  } finally {
    await connection.end();
  }
};