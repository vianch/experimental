const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const { postRoot } = require('./resolver');
const { PostSchema } = require('./schema');

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: PostSchema,
    rootValue: postRoot,
    graphiql: true,
}));

app.listen(4444, () => {
    console.log(`Running a GraphQL API server at http://localhost:4444/graphql`);
});