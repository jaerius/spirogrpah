const express = require("express");
const app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/', (req,res)=> {
    res.send('Main Page')
})

app.listen(8800, ()=> {
    console.log("server is running on 8800")
})