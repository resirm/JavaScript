const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {console.log(`Time now: ${Date.now()}`); next();});
app.use((req, res, next) => {console.log(`Time printed.`); next();})

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Test are listening on port ${port}!`));