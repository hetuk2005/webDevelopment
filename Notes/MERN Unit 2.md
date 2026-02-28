# 📘 Unit 2 -- Introduction to Express & Middleware

### T.Y.B.Sc IT -- Full-Stack Web Development (MERN Stack)

------------------------------------------------------------------------

## 📌 Overview

This unit focuses on **Express.js**, Middleware concepts, RESTful APIs,
Routing, JSON handling, MongoDB integration using Mongoose, and Error
Handling in APIs.

Express simplifies backend development by providing clean routing,
middleware support, and REST API creation.

------------------------------------------------------------------------

# 🚀 Introduction to Express.js

### 📖 Definition

> Express.js is a fast, lightweight, and flexible web framework built on
> top of Node.js used to develop web applications and RESTful APIs.

### 💡 Why Express?

Without Express, plain Node.js requires lengthy and complex routing
code.\
Express provides: - Clean syntax - Easy routing - Middleware support -
Scalability

------------------------------------------------------------------------

# ⚙ Installing Express

``` bash
npm install express
```

### Basic Server Example

``` javascript
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

------------------------------------------------------------------------

# 🌐 Routing in Express

### 📖 Definition

> Routing refers to defining how an application responds to client
> requests for a specific endpoint and HTTP method.

### GET Example

``` javascript
app.get('/', (req, res) => {
  res.send("Welcome to IT Department");
});
```

### POST Example

``` javascript
app.post('/login', (req, res) => {
  res.send("Login Successful");
});
```

### Request & Response Objects

  Object   Purpose
  -------- --------------------------
  req      Contains client data
  res      Sends response to client

------------------------------------------------------------------------

# 🔄 Middleware

### 📖 Definition

> Middleware is a function that executes between the request and the
> response in an Express application.

### Middleware Flow

Client → Middleware → Route → Response

### Why Middleware?

-   Authentication
-   Logging
-   JSON Parsing
-   Error Handling
-   Security

------------------------------------------------------------------------

## Types of Middleware

### 1️⃣ Application-Level

``` javascript
app.use((req, res, next) => {
  console.log("App Middleware");
  next();
});
```

### 2️⃣ Router-Level

``` javascript
const router = express.Router();
router.use((req, res, next) => {
  console.log("Router Middleware");
  next();
});
```

### 3️⃣ Built-in Middleware

-   express.json()
-   express.urlencoded()

### 4️⃣ Third-Party Middleware

``` javascript
const cors = require('cors');
app.use(cors());
```

### 5️⃣ Error Handling Middleware

``` javascript
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something went wrong" });
});
```

------------------------------------------------------------------------

# 🌍 RESTful API

### 📖 Definition

> REST (Representational State Transfer) is an architectural style used
> to design networked applications using HTTP methods.

### HTTP Methods

  Method   Operation
  -------- -----------
  GET      Read
  POST     Create
  PUT      Update
  DELETE   Delete

------------------------------------------------------------------------

# 🔗 Route Parameters & Query Strings

## Route Parameters

``` javascript
app.get('/students/:id', (req, res) => {
  res.send(req.params.id);
});
```

## Query Strings

Example URL:

    /students?dept=IT&year=TY

Access using:

``` javascript
req.query
```

------------------------------------------------------------------------

# 📦 JSON Handling in POST Requests

### Required Middleware

``` javascript
app.use(express.json());
```

### Example

``` javascript
app.post('/register', (req, res) => {
  const data = req.body;
  res.json(data);
});
```

------------------------------------------------------------------------

# 🍃 Connecting MongoDB using Mongoose

### Install

``` bash
npm install mongoose
```

### Connect

``` javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB');
```

### Schema & Model

``` javascript
const studentSchema = new mongoose.Schema({
  rollNo: Number,
  name: String,
  department: String
});

const Student = mongoose.model('Student', studentSchema);
```

### CRUD Methods

-   save()
-   find()
-   updateOne()
-   deleteOne()

------------------------------------------------------------------------

# ⚠ Error Handling in APIs

### Types of Errors

  Code   Meaning
  ------ --------------
  400    Bad Request
  401    Unauthorized
  404    Not Found
  500    Server Error

### Try-Catch Example

``` javascript
try {
  await student.save();
} catch (error) {
  res.status(500).json({ error: "Server error" });
}
```

### Centralized Error Middleware

``` javascript
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});
```

------------------------------------------------------------------------

# 📚 Important Questions

## 5-Mark

-   Define Express.js and explain its features.
-   What is Middleware? Explain types.
-   Explain REST principles.
-   Explain Route Parameters and Query Strings.

## 10-Mark

-   Explain Middleware with examples.
-   Explain RESTful API implementation.
-   Explain Mongoose CRUD operations.
-   Explain Error Handling in APIs.

------------------------------------------------------------------------

# 📝 Quick Revision

-   Express = Backend framework
-   Middleware = Function between request & response
-   REST = API architecture
-   Route Param = req.params
-   Query String = req.query
-   JSON parsing = express.json()
-   Mongoose = MongoDB ODM
-   Proper error handling = Professional APIs

------------------------------------------------------------------------

👨‍💻 **Course:** Full-Stack Web Development (MERN Stack)\
🎓 **Semester:** TYBSc IT -- Semester VI
