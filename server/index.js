const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const cors = require('cors');
const authRoute = require('./routers/auth');
const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//CONNECT TO DATABASE
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=>{console.log('Connect to DB!')});
app.use('/',authRoute);

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
