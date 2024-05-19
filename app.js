const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require('./db/connect');
const bookingsRouter = require('./routes/bookingsRoute');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/shine', (req, res) => {
    res.send("Welcome to Shine's Server");
});

app.use('/api/v1/shine/bookings', bookingsRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
