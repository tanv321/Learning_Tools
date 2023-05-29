const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: 'C:/Users/alamt/Documents/Programming_Projects/.env'});


const app = express();

app.use(cors());

let x = process.env.API_KEY
console.log(x);

app.get('/', (req, res) => {
    res.send('Hello from the root path of the server side!');
  });

app.get('/api/data', (req, res) => {
    // Handle the request and send a response
    const data = {
      message: 'Hello from the server!',
    };
    res.json(data);
  });


app.listen(8000, ()=> {
    console.log('Server is running on port 8000');
})