<img alt="GoStack" src="https://www.kurjerzy.pl/blog/wp-content/uploads/2019/06/blog_588.jpg" />

<h3 align="center">
  Desafio LinkAPI
</h3>

<blockquote align="center">“Dê o seu melhor...”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ferreirase/desafio-linkapi?color=%2304D361">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/desafio-linkapi/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/desafio-linkapi?style=social">
  </a>
</p>

## :rocket: Sobre o projeto

O **Desafio** foi feito como parte do processo seletivo do **[LinkAPI](https://www.linkapi.solutions/produto/)** para a vaga de Desenvolvedor Backend Pleno. 
Consiste em construir uma integração entre os sistemas do **[Bling](https://www.bling.com.br/home)** e da **[Pipedrive](https://www.pipedrive.com/pt)**. 
A integração deve buscar as oportunidades com status igual a ganho(**won**) no **[Pipedrive](https://www.pipedrive.com/pt)** e inseri-las como pedido no **[Bling](https://www.bling.com.br/home)**.
Foi requerido ainda criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
Foi construído um endpoint para trazer os dados consolidados da collection do MongoDB.


### :floppy_disk: A Estrutura

A **API** possui 2 endpoints com 2 métodos pra cada(**GET** e **POST**), descritos abaixo:


- Method: **GET**
- Endpoint: `http://localhost/deals`
- Function: Busca na API do **[Bling](https://www.bling.com.br/home)** e retorna todas os pedidos de venda cadastrados.




A resposta dessa requisição é devolvida com a seguinte estrutura:

```
[
{
    "pedido": {
      "desconto": "0,00",
      "observacoes": "",
      "observacaointerna": "",
      "data": "2020-06-29",
      "numero": "22",
      "numeroOrdemCompra": "",
      "vendedor": "",
      "valorfrete": "0.00",
      "totalprodutos": "13750.00",
      "totalvenda": "13750.00",
      "situacao": "Em aberto",
      "tipoIntegracao": "Api",
      "cliente": {
        "id": "8630135825",
        "nome": "Organization 2",
        "cnpj": "",
        "ie": null,
        "rg": "",
        "endereco": "",
        "numero": "",
        "complemento": "",
        "cidade": "",
        "bairro": "",
        "cep": "",
        "uf": "",
        "email": "",
        "celular": "",
        "fone": ""
      },
      "itens": [
        {
          "item": {
            "codigo": null,
            "descricao": "Celular Xiaomi",
            "quantidade": "10.0000",
            "valorunidade": "1000.0000000000",
            "precocusto": null,
            "descontoItem": "0.00",
            "un": "Un",
            "pesoBruto": null,
            "largura": null,
            "altura": null,
            "profundidade": null,
            "descricaoDetalhada": "",
            "unidadeMedida": "m",
            "gtin": null
          }
        },
        {
          "item": {
            "codigo": null,
            "descricao": "Câmera GoPro",
            "quantidade": "5.0000",
            "valorunidade": "750.0000000000",
            "precocusto": null,
            "descontoItem": "0.00",
            "un": "Un",
            "pesoBruto": null,
            "largura": null,
            "altura": null,
            "profundidade": null,
            "descricaoDetalhada": "",
            "unidadeMedida": "m",
            "gtin": null
          }
        }
      ],
      "parcelas": [
        {
          "parcela": {
            "idLancamento": 0,
            "valor": "13750.00",
            "dataVencimento": "2009-09-01 00:00:00",
            "obs": "",
            "destino": 1,
            "forma_pagamento": {
              "id": 1073121,
              "descricao": "Conta a receber/pagar",
              "codigoFiscal": 15
            }
          }
        }
      ]
    }
  },
]
```

- Method: **POST**
- Endpoint: `http://localhost/deals`
- Function: Acessa a API do **[Bling](https://www.bling.com.br/home)** e insere novos pedidos na plataforma de acordo com os dados vindos do **[Pipedrive](https://www.pipedrive.com/pt)**.

A resposta dessa requisição será  ```
{
  "message": "pedidos adicionados"
}  ``` se os pedidos forem adicionados com sucesso no **[Bling](https://www.bling.com.br/home)** e uma mensagem de erro caso contrário.


- Method: **GET**
- Endpoint: `http://localhost/mongo`
- Function: Busca todas as oportunidades cadastradas no banco de dados Mongo.

A resposta dessa requisição é devolvida com a seguinte estrutura: 


```
[
  {
    "_id": "5efb35deb671fa2be8a1d790",
    "client": "Organization 2",
    "date": "2020-06-29T00:00:00.000Z",
    "total_value": 13750,
    "createdAt": "2020-06-30T12:53:50.591Z",
    "__v": 0
  },
  {
    "_id": "5efb35deb671fa2be8a1d791",
    "client": "Organization 1",
    "date": "2020-06-29T00:00:00.000Z",
    "total_value": 13500,
    "createdAt": "2020-06-30T12:53:50.594Z",
    "__v": 0
  }
]

```


- Method: **POST**
- Endpoint: `http://localhost/mongo`
- Function: Insere novas oportunidades no banco de dados Mongo de acordo com o retorno da busca na API do **[Bling](https://www.bling.com.br/home)**.

A resposta dessa requisição é devolvida com a seguinte estrutura: 

```
{
  "status": "success",
  "message": "Oportunidades inseridas no banco de dados."
}

```

ou 


```
{
  "status": "success",
  "message": "Nenhuma oportunidade nova no Bling"
}

```



### :wrench: Arquivo de configuração

*``` As variáveis de ambiente e configuração estão presentes no arquivo ".env" na raiz do projeto. ```*



**VARIÁVEIS**

- *``` API_KEY_PIPEDRIVE ```*: é a sua chave de API para poder acessar a API do **[Pipedrive](https://www.pipedrive.com/pt)**. Entre no site, cadastre-se e lá você deve gerar essa chave. Com ela em mãos, é só informar neste campo no arquivo ".env".
- *``` BASE_URL_PIPEDRIVE ```*: é a URL base da API do **[Pipedrive](https://www.pipedrive.com/pt)** para buscar oportunidades. 


- *``` API_KEY_BLING ```*: é a sua chave de API para poder acessar a API do **[Bling](https://www.bling.com.br/home)**. Entre no site, cadastre-se e lá você deve gerar essa chave. Com ela em mãos, é só informar neste campo no arquivo ".env".
- *``` BASE_URL_GET_BLING ```*: é a URL base da API do **[Bling](https://www.bling.com.br/home)** para buscar os pedidos. 
- *``` BASE_URL_POST_BLING ```*: é a URL base da API do **[Bling](https://www.bling.com.br/home)** para a API inserir pedidos. 



### :cd: Rodando a aplicação!

**`OBS!!!`**: *``` Para rodar a aplicação na sua máquina, garanta que tenha instalados na mesma o Docker e Docker Compose. ```*


A aplicação rodará na porta **3333** e o banco de dados Mongo na porta **27017**.
 
#### Subindo o servidor backend
  1. Clone/Baixe este repositório na sua máquina;
  2. Abrir o terminal na raiz da pasta e rodar "docker-compose up --build" para criar o contâiner do projeto;
  3. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:3333".
  
  
  Utilize os endpoints informados acima para fazer as operações. 


## :memo: Tecnologias Utilizadas no Projeto

- *``` NodeJS ```*
- *``` TypeScript ```*
- *``` Express ```*
- *``` Eslint ```*
- *``` Prettier ```*
- *``` Mocha ```*
- *``` Chai ```*
- *``` Instanbul ```*
- *``` Axios ```*
- *``` Docker ```*
- *``` MongoDB ```*
- *``` URL Encode ```*

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)
