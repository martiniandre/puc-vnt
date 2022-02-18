const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Aluno = require('./Aluno');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

// Aluno

app.post('/user', async (req, res) => {
    await Aluno.create(req.body);
    res.send('Usuario criado com sucesso');
});



app.listen(3001, () => {
    console.log('app is running');
})
