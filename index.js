require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const app = express();
app.use(express.json());

app.use('/api/persons', personRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('Connection error:', err));
