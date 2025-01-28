const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify({books}))
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    let isbn = req.params.isbn;

    // Convert the books object into an array
    let booksArray = Object.values(books);

    // Filter the books array to find the book with the matching ISBN
    let filtered_books = booksArray.filter((book) => book.isbn === isbn);

    res.send(filtered_books);
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {

    let author = req.params.author;

    // Convert the books object into an array
    let booksArray = Object.values(books);

    // Filter the books array to find the book with the matching ISBN
    let filtered_books = booksArray.filter((book) => book.author === author);

    res.send(filtered_books);
  //Write your code here
  
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {

    let title = req.params.title;

    // Convert the books object into an array
    let booksArray = Object.values(books);

    // Filter the books array to find the book with the matching ISBN
    let filtered_books = booksArray.filter((book) => book.title === title);

    res.send(filtered_books);
  //Write your code here
  //Write your code here
  
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {

    let isbn = req.params.isbn;

    // Convert the books object into an array
    let booksArray = Object.values(books);

    // Filter the books array to find the book with the matching ISBN
    let filtered_books = booksArray.filter((book) => book.isbn === isbn);

    res.send(filtered_books[0].reviews);
  //Write your code here
  
});

module.exports.general = public_users;
