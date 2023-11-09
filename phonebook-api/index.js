const express = require('express');
const cors = require('cors');
const app = express();
const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

// habilita CORS para utilização/teste em maquina local (localhost)
app.use(cors());

// Middleware para autenticação
app.use((req, res, next) => {
  const apiKey = process.env.API_KEY;
  if (req.headers['api-key'] === apiKey) {
    next();
  } else {
    res.status(403).send('Authentication failed');
  }
});

// Endpoint GET de retorno de todos os usuários
app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      phoneNumbers: true,
    },
  });
  res.json(users);
});

// Endpoint GET de retorno de número de um usuário via ID
app.get('/api/users/:userId/phone_numbers', async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      phoneNumbers: true,
    },
  });
  if (user) {
    res.json(user.phoneNumbers);
  } else {
    res.status(404).send('User not found');
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
