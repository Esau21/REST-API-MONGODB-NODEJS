const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();
const API = require('./routes/RoutesUser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 8000);
app.use('/api/user', API);
app.get('/', (req, res) => {
    res.send("Hello World :D")
});


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB IS CONNECTED IN PORT -> || localhost:27017 :D");
}).catch((err) => {
    console.log(err.message);
});

app.listen(app.get('port'), () => {
    console.log("THE SERVER IS RUNNING IN PORT -> || localhost:",app.get('port'));
});