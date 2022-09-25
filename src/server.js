const express = require('express');
const routes = require('./routes');
const port = process.env.PORT || 5555;

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, port => console.log(`Server rodando na porta ${port}`));