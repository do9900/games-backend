const express = require('express');
const app = express();
const port = 4000;
const morgan = require('morgan');
const router = require('./routes/games.routes');
require('./database');
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/games', router);

//connected to server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
