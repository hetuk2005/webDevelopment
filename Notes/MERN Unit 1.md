# 📘 Unit 1 -- Introduction to MERN Stack & Node.js

### T.Y.B.Sc IT -- Full-Stack Web Development (MERN Stack)

------------------------------------------------------------------------

## 📌 Overview

This unit introduces the **MERN Stack** and the fundamentals of
**Node.js** including NPM, Modules, Asynchronous Programming, HTTP
Servers, File System Module, and CLI tools.

The MERN stack is a modern full-stack JavaScript technology used to
build scalable and dynamic web applications.

------------------------------------------------------------------------

# 🚀 What is MERN Stack?

### 📖 Definition

> MERN Stack is a full-stack JavaScript technology stack consisting of
> MongoDB, Express.js, React.js, and Node.js used to build dynamic web
> applications.

### 💡 Explanation

MERN allows developers to use **JavaScript everywhere** --- frontend,
backend, and database --- making development faster and more efficient.

------------------------------------------------------------------------

## 🔷 MERN Components

  Technology   Purpose               Role
  ------------ --------------------- -------------------------------
  MongoDB      NoSQL Database        Stores application data
  Express.js   Backend Framework     Handles routes & APIs
  React.js     Frontend Library      Builds UI
  Node.js      Runtime Environment   Executes JavaScript on server

------------------------------------------------------------------------

# 📦 MongoDB

### 📖 Definition

> MongoDB is a NoSQL, document-oriented database that stores data in
> JSON-like format called BSON.

### 🔹 Key Features

-   Schema-less structure
-   Stores data as documents
-   High performance
-   Scalable

------------------------------------------------------------------------

# 🌐 Express.js

### 📖 Definition

> Express.js is a minimal and flexible web application framework for
> Node.js used to build backend applications and APIs.

### 🔹 Features

-   Lightweight
-   Middleware support
-   Easy routing
-   REST API development

------------------------------------------------------------------------

# 🎨 React.js

### 📖 Definition

> React is a JavaScript library used for building interactive and
> dynamic user interfaces.

### 🔹 Features

-   Component-based architecture
-   Virtual DOM
-   Fast rendering
-   Reusable components

------------------------------------------------------------------------

# ⚙ Node.js

### 📖 Definition

> Node.js is an open-source, cross-platform JavaScript runtime
> environment that executes JavaScript code outside the browser.

### 🔹 Key Features

-   Asynchronous & Non-blocking
-   Event-driven architecture
-   Fast (V8 Engine)
-   Scalable

------------------------------------------------------------------------

# 🔄 MERN Architecture Flow

User → React (Frontend) → Express + Node (Backend) → MongoDB (Database)

------------------------------------------------------------------------

# 📦 NPM (Node Package Manager)

### 📖 Definition

> NPM is the default package manager for Node.js used to install and
> manage project dependencies.

### 🔹 Common Commands

``` bash
npm init
npm install express
npm uninstall express
```

------------------------------------------------------------------------

# 📂 Modules in Node.js

### 📖 Definition

> A module is a reusable block of code in Node.js.

### Types:

-   Built-in Modules (fs, http, path)
-   User-defined Modules
-   Third-party Modules

------------------------------------------------------------------------

# ⚡ Asynchronous Programming

### 📖 Definition

> Asynchronous programming allows tasks to run without blocking the
> execution of other tasks.

### Methods:

-   Callbacks
-   Promises
-   Async/Await

------------------------------------------------------------------------

# 🌐 Creating HTTP Server in Node.js

``` javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(3000);
```

------------------------------------------------------------------------

# 📁 File System (FS) Module

### 📖 Definition

> The File System (fs) module is a built-in Node.js module used to
> interact with the file system.

### Common Methods

-   fs.readFile()
-   fs.writeFile()
-   fs.appendFile()
-   fs.unlink()
-   fs.mkdir()

------------------------------------------------------------------------

# 💻 CLI Tools

### 📖 Definition

> CLI (Command Line Interface) allows users to interact with Node.js
> programs using terminal commands.

Example:

``` bash
node app.js 10 20
```

------------------------------------------------------------------------

# 📚 Important Questions

### 5-Mark

-   Define MERN Stack and explain its components.
-   Explain features of Node.js.
-   What is NPM?
-   Explain types of modules.

### 10-Mark

-   Explain MERN architecture with diagram.
-   Explain Node.js features and setup.
-   Explain HTTP server creation.
-   Explain FS module and CLI tools.

------------------------------------------------------------------------

# 📝 Quick Revision

-   MERN = MongoDB + Express + React + Node
-   Node.js = Server-side runtime
-   Express = Backend framework
-   React = Frontend library
-   MongoDB = NoSQL database
-   NPM = Package manager
-   Async = Non-blocking execution
