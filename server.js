const axios = require('axios');

const url = 'https://webhook.site/f82f5b90-7fb7-4520-bb65-35d80f27b922';

const dadosParaEnviar = {
  nome: 'Rangel',
  sistema: 'Teste',
  status: 'Ok',
  timestamp: new Date().toISOString()
};

async function enviarDoc() {
  try {
    const response = await axios.post(url, dadosParaEnviar);
    console.log('Sucesso.');
    console.log('Status:', response.status);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

enviarDoc();