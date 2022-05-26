const express = require('express')
//const key = require('key.js')
const bodyparser = require('body-parser')
//const mongoose = require('mongoose');
const cors = require('cors')
const app = express();


const connectDB = require('../src/connection01');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(bodyparser.raw());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//mongoose.connect('mongodb+srv://Admin:admin123@cluster0.lc8hf.mongodb.net/Products?retryWrites=true&w=majority')

connectDB();


app.get('/', (rq, res, next) => {
    return res.json([{
        "productName": "School Bag"
    }])
})

app.post('/create-product', (req, res) => {
    // save data to mongodb
    // console.log("Body", req.body, req.body.hello);

    res.json({
        name: "Emama Nahid"
    })

    // req.body == json type data nai
})

app.listen(3000, () => {
    console.log('Listening from port 3000');
});
