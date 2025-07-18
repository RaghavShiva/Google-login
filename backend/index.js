const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: "http://localhost:5173", // or "*" if testing
    credentials: true,              // only if you're using cookies
}));
app.use('/auth/', authRoutes);
app.get('/', (req, res) => {
    res.send('hello from auth server')
})
// app.all('*', (req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
// });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})