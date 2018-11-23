const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

app.post('/button', (req, res) => {
    const  button = req.body.btnval;
    console.log(`Button: ${button}`)
    res.send()
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`[INF] Listening on ${port}...`))