const express = require('express');
const app = express();
const db = require('./db')
const cors = require('cors')

require('dotenv').config()

const port = 4000;

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
     res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept"
     );
     next();
   });
   
app.get('/', (req,res)=> {
     res.send("hellloooo")
})



app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const userSignupRoute = require('./routes/userRoutes')
app.use('/user', userSignupRoute)

const userLoginRoute = require('./routes/userRoutes')
app.use('/user', userLoginRoute)

const DisplayDataRoutes = require('./routes/DisplayDataRoutes')
app.use('/food', DisplayDataRoutes)

app.listen(port,()=>{
     console.log(`server is listing at port : ${port}`);
})