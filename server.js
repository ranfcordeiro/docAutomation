const axios = require('axios');

const url = 'https://webhook.site/94ba076b-79ad-4c82-b833-1a718255dac7';

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