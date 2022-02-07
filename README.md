# dialog-pwa-test

O sistema esta dividito em 2 pastas API e APP:

API é onde esta rodando o servior Web

APP é onde esta rodando a applicação em React

# para baixar a API
$ git clone https://github.com/rogerio-ozarias/dialog-test-api/

# para baixar a APP React
$ git clone https://github.com/rogerio-ozarias/dialog-test-app/

# Startar o servidor da aplicação porta 3000
$ yarn start

# Startar o servidor web porta 4000
$ yarn start

# Chamadas da API
POST http://localhost:4000/

# Buscar todos os usuários
POST http://localhost:4000/
{
	list{
    _id
    email
  	name, 
    friends{
      _id
      email
      name
    }
  }
}

# Buscar filtrando por nome
POST http://localhost:4000/
{
	list(name: "Cecilia ") {
    _id
    email
  	name, 
    friends{
      _id
      email
      name
    }
  }
}

# Buscar por ID
POST http://localhost:4000/
{
	user(_id: "5f1d7f3e2c560fb8589e0bdc") {
    _id
    email
  	name, 
    friends{
      _id
      email
      name
    }
  }
}
