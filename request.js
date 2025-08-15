// async function verCarros() {
//   try {
//     const resposta = await axios.get('http://localhost:3000/carros');
//     console.log('Lista de Carros:', resposta.data);
//     return resposta.data;
//   } catch (erro) {
//     console.error('Erro ao buscar os carros:', erro.message);
//   }
// }

// verCarros();

const axios = require('axios');
const { response } = require('express');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://portalcliente.pixeon.com/doc/rest/api/content/688547239/?expand=body.view.value',
  headers: { 
    'Cookie': 'JSESSIONID=D06FEE0B1DC5EF1B88EC3AB03E67FCDA; crowd.token_key=E9UAxFe2skIIbgc9Nug_uQAAAAAAAoABcmFuZ2VsLmNvcmRlaXJv'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));

const teste = JSON.stringify(response.data)
const API_KEY = 'AIzaSyDfuNF1vrf_AzaN8_IcV87VFdrR5_DbMR8'; 
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
const headers = {
  'Content-Type': 'application/json',
  'X-goog-api-key': API_KEY,
};

const data = {
  contents: [
    {
      parts: [
        {
          text: "Pegue este código "+teste+", pegue o trecho entre as tags 'value:' e 'representation:' e transforme os dados obtido em texto amigável para usuário final"
        }
      ]
    }
  ]
}

axios.post(url, data, { headers })
  .then(response => {
    console.log('Resposta da API:', JSON.stringify(response.data, null, 2));
  })
  .catch(error => {
    console.error('Erro ao chamar a API:', error.response ? error.response.data : error.message);
  });
});

//https://portalcliente.pixeon.com/doc/rest/api/space/PLER
//https://portalcliente.pixeon.com/doc/rest/api/content/200282600
//https://portalcliente.pixeon.com/doc/rest/api/content/709820972/?expand=body.view
