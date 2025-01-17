const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


const users=[
    {id:1, name: 'tusher', email:'tu@gmail.com'},
    {id:2, name: 'bhakta', email:'bhak@gmail.com'},
    {id:3, name: 'anta', email:'nt@gmail.com'}

]

app.use(cors());
app.use(express.json());
app.get('/', ( req,res) =>{
    res.send('user management server');
});
app.get('/users', (req, res) =>{
    res.send(users);
});
app.post('/users', (req,res) =>{
    console.log('post api is hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser) 
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});