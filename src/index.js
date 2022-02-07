const { gql, ApolloServer } = require("apollo-server");

let users = require('../database/db.json');

const PORT= 4000;

//Types
const typeDefs = gql`
  type Friends {
    _id: String!
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }

  type User {
    _id: String!
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [Friends]
  }

  type Query {
    list(name: String): [User]
    user(_id: String!): User
  }

  type Mutation {
    create(_id: String!, name: String!, email: String!, phone: String!): User
    delete(_id: String!): Boolean
    update(_id: String!, name: String!, email: String!, phone: String!): User
  }
`;

//Resolvers
const resolvers = {
  Query: {
    list: (_, { name }) => {
      if(!name) 
        return users;            
      
      query = '('+name.replaceAll(' ', ')[\\ ]*[\ a-z]*(')+')';
      query = query.toLowerCase();
      const regex = new RegExp(query);
      return users.filter(e => regex.test(e.name.toLowerCase()));

    },
    user: (_, { _id }) => {
      return users.find((user) => user._id === _id);
    },
  }  
};

const app = new ApolloServer({
  typeDefs, 
  resolvers,
  context: params => {
      console.log(params.req.body.query);
      console.log(params.req.body.variables);
  }
});  

app.listen(PORT).then(
    ({url}) => console.log(`Server running on ${url}`)
);