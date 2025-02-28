# 🚀 Consulta de Endereço via CEP - API RESTful

Este projeto é uma API RESTful desenvolvida em **Node.js** com **Express**, que consulta endereços a partir do **CEP** utilizando a API pública do [ViaCEP](https://viacep.com.br/).

## 📌 Funcionalidades

* Busca de endereço pelo CEP.
  
* Formatação da resposta em **JSON**.
  
* Tratamento de erros para CEPs inválidos ou indisponíveis.
  
## 🛠️ Tecnologias Utilizadas

* **Node.js** - Plataforma de desenvolvimento JavaScript.
  
* **Express** - Framework para criação de servidores HTTP.
  
* **Axios** - Cliente HTTP para requisições assíncronas.
  
* **ViaCEP** - API pública para consulta de endereços.
  
## 📡 Endpoints Disponíveis

### 🔎 Buscar endereço por CEP

**Rota:**

```http
GET /cep/:cep
```

**Parâmetros:**

* `cep` (Path Parameter): O CEP que será consultado.
  
**Exemplo de requisição:**

```bash
curl http://localhost:3000/cep/01001000
```

**Resposta (JSON):**

```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "cidade": "São Paulo",
  "estado": "SP"
}
```

### ⚠️ Possíveis Erros

| Código | Mensagem                   |
|--------|----------------------------|
| 400    | CEP inválido               |
| 404    | CEP não encontrado         |
| 500    | Erro ao consultar o CEP    |

## 🚀 Como Executar o Projeto

1️⃣ **Clone o repositório:**

```bash
git clone https://github.com/Millkyy/API-ViaCEP.git
```

2️⃣ **Instale as dependências:**

```bash
npm install
```

3️⃣ **Inicie o servidor:**

```bash
node index.js
```

4️⃣ **Acesse a API em:**

```bash
http://localhost:3000/cep/{seu_cep}
```

## 📌 Boas Práticas e Melhorias Futuras

✅ Adicionar autenticação via **API Key** ou **JWT**.

✅ Implementar cache para reduzir chamadas desnecessárias à API do ViaCEP.

✅ Criar um **fallback** para casos onde a API do ViaCEP esteja fora do ar.

✅ Adicionar testes automatizados.
