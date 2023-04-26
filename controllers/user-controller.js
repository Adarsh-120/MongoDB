const { UserModel, BookModel } = require("../models");

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User Doesn't Exist",
//     });
//   }
//   return res.status(200).json({
//     success: true,
//     message: "User Found",
//     data: user,
//   });
// });


exports.getAllUsers = async(req, res) => {
  const users = await UserModel.find();

  if (user.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No user found in the DB !!",
    });
  }
    res.status(200).json({
      success: true,
      message: "These are the user info",
      data: users,
    });
};

exports.getSingleUsersById = async(req, res) => {
  const { id } = req.params;
  const user = await UserModel.findById({_id:id});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Doesn't Exist",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Found",
      data: user,
    });
};

exports.createNewUser = async(req, res) => {
  const { name, surname, email, subscriptionType, subscriptionDate } =
    req.body;

  const newUser = await UserModel.create({
    name,
    surname,
    email,
    subscriptionType,
    subscriptionDate,
  });
    return res.status(201).json({
      success: true,
      message: "User Added Successfully",
      data: newUser,
    });
};

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updateUserData = await UserModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        ...data,
      },
    },
    { new: true }
  );
  return res.status(200).json({
    success: true,
    message: "User updated !!",
    data: updateUserData,
  });
};

exports.deleteUser = async(req, res) => {
  const { id } = req.params;
  const user = await UserModel.deleteOne({ _id: id });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Doesn't exist",
    });
  }
    return res
      .status(200)
      .json({ success: true, message: "Deleted User..", data: user });    //check data , it would be user or users
};


// router.get("/subscription-details/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === id);

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User with the ID Didn't Exists",
//     });
//   }
//   const getDateInDays = (data = "") => {
//     let date;
//     if (data === "") {
//       date = new Date();
//     } else {
//       date = new Date(data);
//     }
//     let days = Math.floor(date / (1000 * 60 * 60 * 24));
//     return days;
//   };

//   const subscriptionType = (date) => {
//     if (user.subscriptionType === "Basic") {
//       date = date + 90;
//     } else if (user.subscriptionType === "Standard") {
//       date = date + 180;
//     } else if (user.subscriptionType === "Premium") {
//       date = date + 365;
//     }
//     return date;
//   };

//   // Jan 1 1970 UTC

//   let returnDateInDays = getDateInDays(user.returnDate);
//   let currentDateInDays = getDateInDays();
//   let subscriptionDateInDays = getDateInDays(user.subscriptionDate);
//   let subscriptionExpiration = subscriptionType(subscriptionDateInDays);

//   // console.log("returnDate", returnDateInDays);
//   // console.log("currentDate", currentDateInDays);
//   // console.log("subscriptionDate", subscriptionDateInDays);
//   // console.log("subscriptionExpiration", subscriptionExpiration);

//   const data = {
//     ...user,
//     isSubscriptionExpired: subscriptionExpiration < currentDateInDays,
//     daysLeftForExpiration:
//       subscriptionExpiration <= currentDateInDays
//         ? 0
//         : subscriptionExpiration - currentDateInDays,
//     fine:
//       returnDateInDays < currentDateInDays
//         ? subscriptionExpiration < currentDateInDays
//           ? 100
//           : 50
//         : 0,
//   };
//   return res.status(200).json({
//     success: true,
//     message: "Subscription detail for the user is: ",
//     data,
//   });
// });