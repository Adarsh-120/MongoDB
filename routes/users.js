const express = require("express");

const {
  getAllUsers,
  getSingleUsersById,
  deleteUser,
  updateUserById,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user-controller");

const { users } = require("../data/users.json");

const { UserModel, BookModel } = require("../models");

const router = express.Router();

/**
 * Route: /
 * Method: GET
 * Description: Get al users
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllUsers);

/**
 * Route: /:id
 * Method: GET
 * Description: Get al users
 * Access: Public
 * Parameters: None
 */

// from const user to if box , will help to find that the user exists or not if not then further process i.e return here....!
router.get("/:id", getSingleUsersById);

/**
 * Route: /
 * Method: POST
 * Description: Creating new users
 * Access: Public
 * Parameters: None
 */

router.post("/", createNewUser);

/**
 * Route: /
 * Method: PUT
 * Description: Updating a user by their id
 * Access: Public
 * Parameters: None
 */

router.put("/:id", updateUserById);

/**
 * Route: /
 * Method: DELETE
 * Description: Deleting a user by their id
 * Access: Public
 * Parameters: None
 */

router.delete("/:id", deleteUser);

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: ID
 */

router.get("/subscription-details/:id",getSubscriptionDetailsById);


module.exports = router;
