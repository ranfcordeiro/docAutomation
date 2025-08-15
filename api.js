const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

function lerCarrosCSV() {
  return new Promise((resolve, reject) => {
    const resultados = [];

    fs.createReadStream('./carro.csv')
      .pipe(csv())
      .on('data', (linha) => resultados.push(linha))
      .on('end', () => resolve(resultados))
      .on('error', (err) => reject(err));
  });
}

app.get('/carros', async (req, res) => {

  try {
    const carros = await lerCarrosCSV();
    res.json(carros);

  } catch (error) {
    res.status(500).json({ erro: 'Erro ao ler o arquivo CSV.', detalhes: error.message });
  }
  
});

//app.post('/')

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});