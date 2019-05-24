const { request } = require("../services/request");

function searchBook(bookString) {
    const uri = `volumes?q=${bookString}`;
    return request
            .get(uri)
            .then(result => {
                return result.data.items;
            })
            .catch(err => err);
}

function addBook(user,book) {
}

function getUserData(user) {
}

function getUserBooks(user) {
}

module.exports = { searchBook }