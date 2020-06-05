const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./server/logging/logger');


require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger);
require('./server/routes/restaurant.routes')(app);

app.listen(8000, () => {
    console.log("You are now listening on port 8000")
})