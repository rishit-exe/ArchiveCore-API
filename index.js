const dotenv = require("dotenv");
const express = require('express'); 
var morgan = require('morgan')

dotenv.config();

const app = express();
const port = process.env.NODE_PORT;
const url = process.env.ARCHIVECORE_URL;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}


// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at ${url}`);
});
