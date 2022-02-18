const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const User = require('./User');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

// User

app.post('/user', async (req, res) => {
    await User.create(req.body);
    res.json({message: 'Usuario criado com sucesso'});
});



app.listen(3001, () => {
    console.log('app is running');
})
