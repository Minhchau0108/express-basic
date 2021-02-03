### Setup ExpressJS

```javascript
npx express-generator --no-view
npm i
npm i --save-dev nodemon
npm i dotenv cors
```

- `Open package.json: add "dev": "nodemon ./bin/www`
- Run server: `npm run dev`

### App.js

Add common dependencies after install

```javacript
require("dotenv").config();
const cors = require("cors");
//....
app.use(cors());
```

### Create .env

```javascript
PORT = 5000;
```

### Add error handler

```
app.use((req, res, next) => {
  const error = new Error("Resource Not Found");
  error.statusCode = 404;
  next(error);
});

app.use( (err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode ? err.statusCode : 500).send(err.message)
})
```

!!! Remove everything in folder `public/`

### Configure the routes

Overview of the routes system

```
app.js:
  /api => routes/index.js
          /users => user.api.js
                      router.post('/') => POST api/users
          /auth => auth.api.js
                      router.post('/login') => POST api/auth/login
```

1. In app.js

```javascript
app.use("/api", indexRouter);
```

2. In index.js

```javascript
var express = require("express");
var router = express.Router();

const userApi = require("./user.api.js");
router.use("/users", userApi);

const authApi = require("./auth.api.js");
router.use("/auth", authApi);

module.exports = router;
```

### Put the handler in controllers

```javascript
const userController = {};

userController.register = (req, res, next) => {
  res.send("Create new user");
};

module.exports = userController;
```

### Setup endpoint API

```
const express = require("express");
const router = express.Router();
+const userController = require('../controllers/user.controller.js')

/**
 * @route POST /api/users
 * @description Register new account
 * @access Public
 */
+router.post('/', userController.register)
```
