const express=require('express');
const app=express();
require('./connection')
const userRoutes =require('./routes/userRoutes');



const rooms=['general','crypto','tech','finance'];
const cors=require('cors');


app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json())
app.use('/users',userRoutes)


const server =require('http').createServer(app);
const PORT= 4000;
const io=require('socket.io')(server,{
   cors:{
      origin:'http://localhost:3300',
      methods:['GET','POST']

   }
})

server.listen(PORT,()=>console.log(`listening to port : ${PORT}`))
