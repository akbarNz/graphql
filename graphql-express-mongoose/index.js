require("dotenv").config();
import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const PORT = 3000;
const dbUri = process.env.MONGOLAB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(dbUri, { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.json({
        msg: 'welcome to GRAPHQL'
    });
});
app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});