const express = require('express');
const cors = require('cors');
const db = require('./models');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRoutes');

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.use(cors({
  origin: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(8080, () => console.log(`Server runnig on 8080`));