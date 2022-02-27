const graphql = require('graphql');
const UserType = require('./TypeDefs/UserType');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} = graphql;


const userData = require('../demo_data.json');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUser: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                //Acesso a um DB.
                return userData;
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: { type: GraphQLString}, 
                email: { type: GraphQLString},
                password: { type: GraphQLString}
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                })
                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })