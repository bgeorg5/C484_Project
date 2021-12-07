const express = require('express');
const mongoose = require('mongoose');
const routes = require('./app/routes/api');
const app = express();
const cors = require('cors');
require('dotenv').config();

const db = require("./app/models");
const Role = db.role;

const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected successfully');
        initial();
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });


app.use(express.json())
app.use(cors())

/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'x-access-token', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}); 

app.use('/api', routes); */

app.use((err, req, res, next) =>{
    console.log(err);
    next();
});    

require("./app/routes/authRoutes")(app);
require("./app/routes/userRoutes")(app);

app.listen(port, () => {
    console.log("Server running on port " + port);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
}
  