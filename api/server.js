require('dotenv').config();
require('./db/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('express')();
const { searchBook } = require("./lib");
const { listAll, getUser, addUserBook, updateProgress, findBookReaders } = require("./db/controllers/user");

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req,res) => {
  return searchBook(req.query.bookString)
      .then(result => res.send(result))
      .catch(err => res.send(err));
});

app.get('/getUsers', (req,res) => {
  return listAll()
    .then(users => res.send(users)).catch(err => console.log(err));
});

app.get('/getUser', (req,res) => {
  return getUser(req.query.username)
    .then(user => res.send(user)).catch(err => console.log(err));
});

app.get('/findBookReaders', (req,res) => {
  return findBookReaders(req.query.bookTitle)
    .then(user => res.send(user)).catch(err => console.log(err));
})

app.post('/addUserBook', (req,res) => {
  let username = req.body.username;
  let book = JSON.parse(req.body.book);
  return addUserBook(username, book)
    .then(res => res.send(200))
    .catch(err => err);
})

app.post('/updateProgress', (req,res) => {
  const progress = JSON.parse(req.body.progress);
  let username = progress.username;
  let book_title = progress.title;
  let current_page = progress.current_page;
  let rating = progress.rating;
  let comment = progress.comment;
  return updateProgress(username, book_title, current_page, rating, comment)
    .then(res => res.send(200))
    .catch(err => err);
})

app.listen(PORT, () => { 
  console.log(`App Server listening on port ${PORT}.`);
});
