const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(
    cors({
        origin: 'http://localhost:5500',
    })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/generate-segitiga', (req, res) => {
    const { value } = req.body;
    const numbers = String(value).split('');
    const segitigaNumber = [];
    let angkaNol = '0';
    numbers.forEach((number) => {
        const newSegitiga = `${number}${angkaNol}`;
        segitigaNumber.push(newSegitiga);
        angkaNol += '0';
    });

    res.json({ value: segitigaNumber });
});
app.post('/generate-ganjil', (req, res) => {
    const { value } = req.body;
    let initialValue = 0;
    const bilanganGanjil = [];
    while (initialValue <= value) {
        if (initialValue % 2 === 1) {
            bilanganGanjil.push(initialValue);
        }
        initialValue++;
    }
    res.json({
        value: bilanganGanjil,
    });
});
app.post('/generate-prima', (req, res) => {
    const { value } = req.body;
    let initialValue = 0;
    const bilanganPrima = [];
    const semuaBilangan = [2]
    while (initialValue <= value) {
        semuaBilangan.forEach((bilangan) => {
            if(bilangan !== 1 && bilangan !== initialVal && initialValue % bilangan) {

            }
        })
        if (initialValue % 2 === 1) {
            bilanganPrima.push(initialValue);
        }
        initialValue++;
    }
    res.json({
        value: bilanganPrima,
    });
});

app.listen(port, () => {
    console.log('listening on port ', 3000);
});
