const fs = require("fs");
const userController = {};
userController.register = (req, res, next) => {
  // Read data in db.json and find the user with that email
  const { name, email, password } = req.body;
  const rawData = fs.readFileSync("db.json");
  let data = JSON.parse(rawData);
  let users = data.users;
  let user = users.find((user) => user.email === email);

  // If email exists (user is not null): response an error
  if (user) return next(new Error("Email already exist"));

  // It not (user is null): create a new user and save into db.json
  user = { name, email, password };
  data.users.push(user);

  fs.writeFileSync("db.json", JSON.stringify(data));
  res.status(200).json({
    user,
    message: "Create new user successfully",
  });
};
module.exports = userController;
