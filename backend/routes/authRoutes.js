const express = require('express');
const Router = express.Router();
const { googleAuth } = require('../controllers/authController');

// Router.get('/test', (req, res) => {
//     res.send('test pass')
// })
Router.get("/google", googleAuth);

module.exports = Router;