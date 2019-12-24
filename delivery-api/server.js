const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

const userController = require('./controllers/userController');
const businessController = require('./controllers/businessController');

app.use('/user', userController);
app.use('/business', businessController);

app.listen(3001, () =>{
    console.log('listening on port 3001');
} )