const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const db = require('./models');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRoutes');

const passportConfig = require('./passport');

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('techbsecret'));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: 'techbsecret',
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(8080, () => console.log(`Server runnig on 8080`));