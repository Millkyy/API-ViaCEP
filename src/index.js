//importando bibliotecas
const express = require('express'); //para criar o servidor
const axios = require('axios'); //para fazer requisições http

const app = express(); //vai executar o express
const PORT = 3000; //sinaliza a porta que vamos usar


//endpoint para buscar o endereço pelo cep
app.get('/cep/:cep', async (req, res) => { 
    /*sinalizando função get, nome do serviço, definindo o parâmetro 
    de requisição e chamadas múltiplas (assincronamente recebe requisição e respostas)*/
    const { cep } = req.params;

    try {
        // Fazendo requisição para a api ViaCEP
        // await sinaliza que é para esperar o retorno da chamada para seguir com as outras linhas do código
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`); 
        const endereco = response.data;

        // Se não encontrar o cep
        if (endereco.erro) {
            return res.status(404).json({ mensagem: 'CEP não encontrado' });
        }
        
        // Retorna endereço formatado
        res.json({
            cep: endereco.cep,
            logradouro: endereco.logradouro,
            bairro: endereco.bairro,
            cidade: endereco.localidade,
            estado: endereco.uf
        });

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao consultar o CEP' });
    }

});

// Iniciando servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Outras boas práticas:
// Colocar no seu projeto um temporizador de requisição (após quanto tempo da requisição dá erro)
// Criar um backup para um fallback na jornada (por exemplo ter uma base de dados)