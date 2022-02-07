# dialog-test-api

# Startar o servidor
$ yarn start

# Chamada da API
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
