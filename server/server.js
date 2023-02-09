const express = require('express');
const cors = require("cors");
const app = express();
require('./config/mongoose.config')
const port = 8000;
require('./routes/routes.reservation')(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}));



app.listen(port, () => console.log(`Listening on port: ${port}`));
