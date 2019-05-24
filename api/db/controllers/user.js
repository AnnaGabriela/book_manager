const User = require('../models/user');

function listAll() {
    return User.find().then(user => user).catch(err => err);
}

function getUser(username) {
    return User.findOne({ name: username }).then(user => user).catch(err => err);
}

function addUserBook(username, book) {
    return User.findOneAndUpdate({ name: username }, {$push: {reading: { book_info: book }}})
    .then(res => res)
    .catch(err => err);
}

function updateProgress(username, book_title, current_page, rating, comment) {
    let query = {'$and': [{ 'reading.book_info.title': book_title }, { name: username }]};
    return User.updateOne(query, { '$set': {
        'reading.$.current_page': current_page,
        'reading.$.rating': rating,
        'reading.$.comment': comment,
    }}).then(res => res).catch(err => err);
}

function findBookReaders(book_title) {
    return User.find({ 'reading.book_info.title': book_title })
        .then(res => res).catch(err => err);
}

module.exports = { 
    listAll,
    getUser,
    addUserBook,
    findBookReaders,
    updateProgress,
}

