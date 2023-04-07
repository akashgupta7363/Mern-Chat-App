const mongoose= require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@projects.idqjeny.mongodb.net/chatAppMern?retryWrites=true&w=majority`)
.then(console.log('connected to mongoDB')).catch((error)=>console.log(error));