const express = require('express');
const app = express();

app.use(express.json())
let id = 2;

let cars = [
    {
        id:1,
        name:"Dacia",
        color:"red"
    },
    {
        id:2,
        name:"Ford",
        color:"white"
    }
]

app.get('/', (req, res) => {
    return res.send({
        Info:"Cars database"
    });
  });

app.get('/cars', (req, res) => {
    return res.send(cars);
});

app.get('/cars/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let car = cars.find( (car) => {return car.id === id});

    return res.send(car);
});

app.post('/cars', (req, res) => {
    id++;

    let carData = req.body;
    let car = {
        ...carData,
        id
    };
    cars.push(car);

    return res.send("worked");
});

app.put('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    delete req.body.id
    let carData = req.body
    
    cars = cars.map( car => (car.id == id ? {...car, ...carData} : car))

    return res.send("worked");
});

app.delete('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    cars = cars.filter(car => car.id !== id)
    
    return res.send("worked?");

});

const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if(error){
        console.log("Error starting the app");
    }
    console.log("App running on port " + port);
});