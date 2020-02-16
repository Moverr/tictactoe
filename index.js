const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let {initGame} = require('./tictactoe');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(req.query);
    let boardstring = req.query['board'];
    console.log(boardstring);
    result = initGame(boardstring);
    res.status(200).json(result);
});

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
