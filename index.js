express = require('express');
app = express();
cors = require('cors');
require('dotenv').config();
const { PORT,BASE_URL} = process.env;

const mapData = require('./routes/MapData');
const signup = require('./routes/SignUp');
const signin = require('./routes/SignIn');

app.use(express.json());
app.use(cors());

app.use('/', mapData);
app.use('/signup', signup);
app.use('/signin', signin);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Example app listening at ${BASE_URL} ${PORT}`);
});