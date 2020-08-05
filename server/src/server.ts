import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { name: 'Juana', age: 19 },
    { name: 'Leonardo', age: 23 },
  ]

  return res.json(users);
});

app.listen(3333);
