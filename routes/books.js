const express = require("express");

const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
} = require("../controllers/book-controller");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

// const { route } = require("./users");

// const BookModel = require('../models/book-model');
// const UserModel = require('../models/user-model');

const router = express.Router();

const { UserModel, BookModel } = require("../models/index");

/**
 * Route: /books/:Id
 * Method: GET
 * Description: Get books by their Id
 * Access: Public
 * Parameters: Id
 */
router.get("/:id", getSingleBookById);


/**
 * Route: /books
 * Method: GET
 * Description: Getting all books
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllBooks);

/**
 * Route: /books/:Id
 * Method: GET
 * Description: Get all Issued Books
 * Access: Public
 * Parameters: Id
 */

router.get("/issued/by-user", getAllIssuedBooks );


/**
 * Route: /
 * Method: POST
 * Description: Adding a new Book
 * Access: Public
 * Parameters: None
 */

router.post("/", addNewBook);

/**
 * Route: /:id
 * Method: PUT
 * Description: Update a book by their Id
 * Access: Public
 * Parameters: Id
 * Data: id, name, author, genre, price, publisher
 */

router.put("/updateBook/:id", updateBookById);

// /**
//  * Route: /:id
//  * Method: PUT
//  * Description: Get all issued Books with fine
//  * Access: Public
//  * Parameters: Id
//  * Data: id, name, author, genre, price, publisher
//  */

// router.get("/issued/:id", (req, res) =>{
//   const bookWithFine = users.

// })

module.exports = router;
