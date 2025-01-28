const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
//VERY IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
public_users.post("/register", (req, res) => {
  //implemented in auth_user.js VERY IMPORTANT!!!!!!!!!!!!!
  return res.status(300).json({ message: "Yet to be implemented" });
});
//VERY IMPORTANT!!!
// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/books'); // Simulate fetching from an endpoint
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books." });
  }
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
  let isbn = req.params.isbn;
  try {
    const response = await axios.get(`http://localhost:5000/books?isbn=${isbn}`); // Simulate fetching by ISBN
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book by ISBN." });
  }
});

// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  let author = req.params.author;
  try {
    const response = await axios.get(`http://localhost:5000/books?author=${author}`); // Simulate fetching by author
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book by author." });
  }
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  let title = req.params.title;
  try {
    const response = await axios.get(`http://localhost:5000/books?title=${title}`); // Simulate fetching by title
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book by title." });
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  let isbn = req.params.isbn;

  // Convert the books object into an array
  let booksArray = Object.values(books);

  // Filter the books array to find the book with the matching ISBN
  let filtered_books = booksArray.filter((book) => book.isbn === isbn);

  res.send(filtered_books[0].reviews);
  //Write your code here

});

module.exports.general = public_users;
