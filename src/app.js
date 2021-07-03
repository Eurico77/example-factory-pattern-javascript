const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = 4444;
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});
