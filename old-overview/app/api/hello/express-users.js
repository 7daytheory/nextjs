//Express application

const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    //Handle GET request for /api/users
    const users = [
        {id: 1 , name: "Matt"},
        {id: 2 , name: "Michele"},
        {id: 3 , name: "Glenn"},
    ];

//Send the users as a response
res.json(users);
})

//listen on a specific port
app.listen(3000, () => {
    console.log("App is listening to you, even in your sleep...");
})