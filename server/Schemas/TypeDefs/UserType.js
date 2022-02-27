const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;


const AlunoType = new GraphQLObjectType({
    name: 'Aluno',
    fields: () => ({
        id: { type: GraphQLInt},
        firstName: {type: GraphQLString},
        lastName: { type: GraphQLString}, 
        email: { type: GraphQLString},
        password: { type: GraphQLString}
    })
})

module.exports = AlunoType;