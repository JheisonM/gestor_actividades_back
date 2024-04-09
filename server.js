const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

let users = []; // Almacenamiento temporal de usuarios registrados

app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario ya está registrado
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya está registrado' });
  }

  // Crear un nuevo usuario
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario existe
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' });
  }

  res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
