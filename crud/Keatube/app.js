const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('videos'));


const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/player/:name", (req, res) => {
    //let video = req.params.name;

    res.sendFile(__dirname + "/public/player/player.html");
});

const server = app.listen(port, (error) => {
    if(error){
        console.log("Error starting the app");
    }
    console.log("App running on port " + port);
});