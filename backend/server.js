const express = require('express');
const { post } = require('./routes/postRoutes');

const app = express();

app.use('/post', post);

app.listen(8080, () => console.log(`Server runnig on 8080`));