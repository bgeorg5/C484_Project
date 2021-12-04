const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const DB = process.env.DB;

mongoose
    .connect(DB, { useNewUrlParser: true })
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}); 

app.use('/api', routes);

app.use((err, req, res, next) =>{
    console.log(err);
    next();
});

app.use("*", (req, res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {
    console.log("Server running on port " + port);
});
