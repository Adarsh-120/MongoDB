const { UserModel, BookModel } = require("../models");

// const getAllBooks = () => {};
exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find();

    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Book Found"
        })
    }
    res.status(200).json({ 
        success: true, 
        data: books,
    });
};


exports.getSingleBookById = async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findById(id);

  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book Not Found",
    });
  }
    return res.status(200).json({
      success: true,
      message: "Found the Book By their Id",
      data: book,
    });
};


exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModel.find({
        issuedBook: {$exists: true}
    }).populate("issuedBook");
    
      if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No Book Have Been Issued Yet..",
    });
  }
  return res.status(200).json({
    success: true,
    messsage: "Users with the Issued Books..",
    data: issuedBooks,
  });
}
// module.exports = { getAllBooks, getSingleBookById };

router.get("/issued/by-user", (req, res) => {
//   const usersWithTheIssuedBook = users.filter((each) => {
//     if (each.issuedBook) return each;
//   });
//   const issuedBooks = [];

//   usersWithTheIssuedBook.forEach((each) => {
//     const book = books.find((book) => (book.id = each.issuedBook));

//     book.issuedBy = each.name;
//     book.issuedDate = each.issuedDate;
//     book.returnDate = each.returnDate;

//     issuedBooks.push(book);
//   });
//   if (issuedBooks.length === 0) {
//     return res.status(404).json({
//       success: false,
//       message: "No Book Have Been Issued Yet..",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     messsage: "Users with the Issued Books..",
//     data: issuedBooks,
//   });
// });