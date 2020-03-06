const express = require("express");
const app = express();

const request = require("request");

// callback function
// between ("") we write the path
app.get("/", (req,res) => {
    const response = {
        message: "Hi there"
    }
    res.send(response);
 })
// app.get("/test", (req,res) => {
//     const response = {
//         message: "TEEEEEEEEEEEEEST"
//     }
//     res.send(response.message);
// })
// app.get("/aboutMe" , (req,res) => {
//     const response = {
//         name: "Frederick",
//         hobby: "Conquering",
//         age: "Immortal"
//     }
//     res.send(response);
//
// })
app.get("/time" , (req,res) => {
    const date = new Date();

    let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturnday"]
    res.send(
        {
            today: dayArray[date.getDay()]

        });

})


// create a get route on /users

app.get("/users/:id", (req,res) => {
    
    let users = [{id: 1, name:"albert"},{id: 2, name:"albertn't"},{id:3, name:"alberto"}];
    users.forEach(user => {
        if (user.id === parseInt(req.params.id)) {
            res.send(user)
        }
    })


})

app.get("/test" , (req,res) =>{
    if(true){
        res.send({message: "if"});
    } else {
        res.send({message: "else"})
    }
    res.send({message: "outside of both"})
    

})

app.get("/search" , (req,res) =>{

    if(req.query.name === "sarmale")    res.send({message: "Da boss"})
    else                                res.send({message: "Nu avem decat sarmale"})

})

app.get("/google" , (req,res) =>{
    request('http://www.google.com', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    });
})


app.get("/documentation" , (req,res) =>{

    console.log(__dirname);
    return res.sendFile(`${__dirname}/public/documentation.html`);
    // return res.redirect("/documentation2"); 

})
app.get("/documentation2" , (req,res) =>{

    console.log(__dirname);
    return res.sendFile(`${__dirname}/public/documentation2.html`);

})

app.listen(3000, (error) => {
    if(error){
        console.log("Error running this server", error);
    }
    console.log("Server is running on port 3000");
});
