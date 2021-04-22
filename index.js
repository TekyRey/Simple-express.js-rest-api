const express= require('express');
const app = express();
const path = require('path');

const PORT =process.env.PORT || 5000;

const users=[
    {id:1, name: 'Rehema', email: 'rehema@gmail.com'},
    {id:2, name: 'Mwaka', email: 'mwaka@gmail.com'},
    {id:3, name: 'Baya', email: 'baya@gmail.com'},
]



app.get('/api/users',(req,res) =>{
    res.json(users);
})

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, () => console.log(`server runs on port ${PORT}`));