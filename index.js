const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const hostname = '192.168.1.115'

const app = express()
const port = 3000;

// MongoDB csatlakozás
mongoose.connect('mongodb+srv://ekreta_adminisztracio:admin@kreta-database.uozablb.mongodb.net/?retryWrites=true&w=majority&appName=kreta-database/jegyek', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connected successfully');
});

// Modell definíciója
const jegySchema = new mongoose.Schema({
    tema: String,
    tipus: String,
    ertek: Number,
    tanar: String,
    datum: String,
    targy: String,
    diak: String,
});

const diakSchema = new mongoose.Schema({
    azonosito: String,
    szuletes: String,
    nev: String,
})

const Jegy = mongoose.model('Jegy', jegySchema);
const Diak = mongoose.model('DiakAzonosito', diakSchema)

// Middleware-ek beállítása
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Belépő oldal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Jegyek listázása
app.get('/jegyek', async (req, res) => {
    try {
        const jegyek = await Jegy.find();
        res.json(jegyek);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Jegy írása
app.post('/jegyek', async (req, res) => {
    try {
        const { tema, tipus, tanar, ertek, datum, targy, diak } = req.body;
        const jegy = new Jegy({ tema, tipus, ertek, tanar, datum, targy, diak });
        await jegy.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/users', async (req, res) => {
    try {
        const { nev, szdatum, azonosito } = req.body
        console.log(`${nev} ${szdatum} ${azonosito}`)
        const diak = new Diak({ azonosito, szdatum, nev})
        await diak.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
})

app.listen(port, function(err){
    console.log(`App listening at ${port}`);
});
