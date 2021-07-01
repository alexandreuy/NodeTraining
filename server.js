const express = require('express');
const apiRouter = require('./routes');

const app = express();


app.use('/api/test', apiRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Votre app est disponible sur : ${process.env.PORT || '3000'}`);
})

