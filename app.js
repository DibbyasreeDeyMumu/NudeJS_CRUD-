const express = require('express');
const app = express();
app.use(express.json());

const studentRoutes = require('./api/routes/students');

app.use('/students', studentRoutes);

module.exports = app;