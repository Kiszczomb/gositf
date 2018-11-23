const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// const cars = [
//     { id: 1, brand: 'Ford', model: 'Focus'},
//     { id: 2, brand: 'Śkoda', model: 'Octavia'},
//     { id: 3, brand: 'Chrysler', model: 'Voyager'},
//     { id: 4, brand: 'Nissan', model: 'Note'},
//     { id: 5, brand: 'Wartburg', model: '1.3'}
// ]

// app.get('/', (req, res) => {
//     res.send("Dobry wieczór")
// })

// app.get('/api/cars/:id', (req, res) => {
//     const car = cars.find(c => c.id === parseInt(req.params.id))
//     if(!car) res.status(404).send('Car with given ID not found')
//     res.send(car)
// })

// app.get('/api/cars', (req, res) => {
//     res.send(cars)
// })

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

app.post('/button', (req, res) => {
    const  button = req.body.btnval;
    console.log(`Button: ${button}`)
    res.send()
})

const port = process.env.PORT || 3000;
app.listen(port, console.log(`[INF] Listening on ${port}...`))