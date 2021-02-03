const fs = require("fs");
const authController = {};
authController.loginWithEmailPassword = (req, res, next) => {
  // Get email and password from req.body
  const { email, password } = req.body;

  // Read data from ds.json
  const rawData = fs.readFileSync("db.json");
  let data = JSON.parse(rawData);
  let users = data.users;
  let user = users.find((user) => user.email === email);
  // Find a user with that email
  // If user is null: return error: "User not exists"
  if (!user) return next(new Error("User not exists"));

  // If user is not null: compare the password from req.body with the password in db
  if (user.password !== password) return next(new Error("Incorrect password"));

  // if not match: return an error: "Incorrect password"
  // if match: response status 200 and the user object to the front end
  res.status(200).json({
    user,
    message: "Login successfully",
  });
};
module.exports = authController;
