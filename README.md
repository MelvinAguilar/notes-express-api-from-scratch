<div id="top"></div>
<!-- 
<details>
<summary><b>🔍💬 Explanation of code</b></summary>
</br>
  
Here's what each option does:
  

</details>
-->

<div align="center">
  <h1 align="center">API from Scrach</h1>

> .
> <h3 align="center">🚀  Class notes on how to create an API </h3>
>  <p align="center">
>   <img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
>   <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
>   <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
>   <img src="https://img.shields.io/badge/-Mongoose-333?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
>   <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white" alt="Nodemon" />
>   <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
> </p>
> .
</div>

</br>


## 📍 Table of Contents


- [📍 Table of Contents](#-table-of-contents)
- [🔍 Checking Node.js and npm Yarn Versions](#-checking-nodejs-and-npm-yarn-versions)
- [🚀 Generating a New Express Application](#-generating-a-new-express-application)
- [📁 Project Structure](#-project-structure)
- [📦 Installing Packages](#-installing-packages)
- [🏃 Starting Your Application with Nodemon](#-starting-your-application-with-nodemon)
- [🌳 Using dotenv package to manage environment variables](#-using-dotenv-package-to-manage-environment-variables)
- [🛣 Setting up routes directly in app.js](#-setting-up-routes-directly-in-appjs)
  - [🗑 Removing default routes](#-removing-default-routes)
  - [➕ Creating a new route](#-creating-a-new-route)
  - [🔧 Adding a route with parameters](#-adding-a-route-with-parameters)
  - [🛡️ Using Simple Validation in Route](#️-using-simple-validation-in-route)
- [🗂 Organizing Routes](#-organizing-routes)
- [🏭 Using Mongoose in Your Node.js Application](#-using-mongoose-in-your-nodejs-application)
- [🐞 Using Debug](#-using-debug)
- [💾 Schemas](#-schemas)
  - [⚙️ Schema Options](#️-schema-options)
  - [📝 Creating a Schema in Mongoose](#-creating-a-schema-in-mongoose)
- [🎛 Creating Controllers in Node.js with Express](#-creating-controllers-in-nodejs-with-express)
  - [✌️ Two approaches to create a new document in a controller](#️-two-approaches-to-create-a-new-document-in-a-controller)
- [🔧 Creating a Helper Function for Better Code Organization](#-creating-a-helper-function-for-better-code-organization)
- [🔍 Validating Data](#-validating-data)
- [👮 Generic validator](#-generic-validator)
- [🔒 Using CORS](#-Using-CORS)


</br>

❗ **Disclaimer**: These are old class notes on how to create an API. I wrote them to remember the process of creating an API. Please note that this Readme does not explain everything in detail, and there are complete tutorials available on YouTube on how to create an API. These notes are just humble reminders of the process.


## 🔍 Checking Node.js and npm Versions

To check the versions of Node.js and npm (Node Package Manager), use the following commands in your terminal:

````
node -v
npm -v 
````

<p align="right">(<a href="#top">back to top</a>)</p>



## 🚀 Generating a New Express Application

To generate a new Express application with a specific name and options, use the npx express-generator command in your terminal:

````
npx express-generator <name_project> --no-view --git
````


<details>
<summary><b>📌 Here's what each option does:</b></summary>
</br>
  
- `<name_project>` is the name of the new Express application that will be generated.
- `--no-view` tells the generator not to include a view engine such as EJS or Pug, meaning that the application will not have any default views or templates.
- `--git` adds a .gitignore file to the project.
</details>
  
For more information, see the [Express application generator](https://expressjs.com/en/starter/generator.html) documentation.


The next step is run the following code:
```
cd <name_project>
npm install
```

Running the command `npm install` installs all the dependencies listed in the `package.json` file of your project.

<p align="right">(<a href="#top">back to top</a>)</p>



## 📁 Project Structure

When you generate a new Express application, it will have the following structure:

- The `bin/www` file is the entry point of the application and is responsible for starting the server.
- The `public/` directory is used for serving static files such as CSS, JavaScript, and images.
- The `routes/` directory contains the route handlers for the application. It includes two sample route files: `index.js` and `users.js`.
- The `app.js` file is the main file of the application that sets up the middleware, routes, and configurations.

<p align="right">(<a href="#top">back to top</a>)</p>



## 📦 Installing Packages

To help you develop your Node.js application, you can install the nodemon package, which automatically restarts the application when file changes in the directory are detected.

To install `nodemon`, run the following command in your terminal:

```
npm i -D nodemon
```

<details>
<summary><b>📌 Here's what each option does:</b></summary>
</br>
  
The `-D` flag in `npm i -D nodemon` specifies that nodemon should be installed as a development dependency, meaning that it will only be installed in your development environment and will not be included in your production build.
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

To install all the dependencies use:

````
npm i -D nodemon
npm i dotenv
npm i mongoose
npm i express-validator
npm i cors
````



## 🏃 Starting Your Application with Nodemon

To start your Node.js application using nodemon, add the following script to your `package.json` file:

```
"scripts": {
 "start": "node ./bin/www",
 "start:dev": "nodemon ./bin/www"
},
```

With the `start:dev` script added to your `package.json` file, you can start your Node.js application using nodemon by running the following command in your terminal:

```
npm run start:dev
```

<p align="right">(<a href="#top">back to top</a>)</p>



## 🌳 Using dotenv package to manage environment variables

The dotenv package is a helpful tool when working with sensitive data such as API keys, passwords, and other configuration variables that should not be hard-coded into your code. It allows you to load environment variables from a `.env` file into Node.js process.env object.

To install the dotenv package in your project, run the following command in your terminal:

```
npm i dotenv
```

To use dotenv, create a `.env` file in the root directory of your project and define your environment variables in it using the **KEY=VALUE** syntax. For example:

````
PORT=3000
DEBUG=`app:*`
DBHOST=localhost
DBPORT=27017
DBNAME=
DBURI=
````

Then, in your `bin/www` file, require the dotenv package at the top of your file:


```
require('dotenv').config();
```

<p align="right">(<a href="#top">back to top</a>)</p>



## 🛣 Setting up routes directly in app.js

You can set up the routes directly in the `app.js` file.

### 🗑 Removing default routes

Here are the steps to remove the router modules and set up the routes directly in app.js:

1. In your text editor, navigate to the `/routes` directory and delete the `index.js` and `users.js` files.
2. Remove the following lines of code from app.js:

```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);
```

### ➕ Creating a new route

To create a new route:

1. In your text editor, navigate to the `/routes` directory.
2. Create a new folder called `api` and inside it, create a new file called `todo.router.js`. (you can replace "todo" with the name of the router you want to create).
3. Open the `todo.router.js` file and add the following code to define a new route:


```
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send("This is the API route!");
});

module.exports = router;
```

<details>
<summary><b>🔍💬 Explanation of code</b></summary>
</br>
  
- `var express = require('express')`: This line imports the express module and assigns it to the variable express.
- `var router = express.Router()`: This line creates a new router object using the `express.Router()` method and assigns it to the variable `router`. This router object can be used to define routes for the API.
- `router.get('/', (req, res, next) => {...})`: This line defines a new route for the API that handles GET requests to the root URL ('/'). The function passed as the second argument is a callback that is executed when a GET request is received at this endpoint.
    - The `req` parameter contains information about the incoming request.
    - The `res` parameter is used to send a response back to the client.
    - The `next` parameter is a function that can be used to pass control to the next middleware function in the stack.
- `module.exports = router`: This line exports the router object so that it can be used by other modules.
</details>

4. Open the `app.js` file and add the following code to require and use the `todo.router.js` module:

```
var todoRouter = require('./routes/api/todo.router');

app.use('/todo', todoRouter);
```

Now, the Express application will use the new `todo.router.js` module to handle requests to the `/todo` URL path. When a user visits `/api/todo`, they will see the message "This is the API route!" displayed in their browser.


Note: To add a route that returns a status code of 200 and a JSON response with a message of 'OK' use this code:

```
router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'OK' });
});
```

### 🔧 Adding a route with parameters

The URL of a request can include parameters, which are used to specify additional information needed to process the request. This allows for dynamic content to be displayed to the user based on the value of the parameter. For example, in a blog application, a parameter could be used to retrieve a specific blog post based on its unique identifier.

To create a route with a parameter:

1. Define a new GET route using the router.get() method with a path that includes a parameter placeholder (e.g. /users/:id).

```
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  // do something with the id
  res.send(`You requested the todo with ID: ${id}`);
});
```

### 🛡️ Using simple validation in Route


Here's an example of a route that uses validation to check if an object exists and returns a 404 error if it does not:

```
const someData = [ /* array of objects */ ];

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const obj = someData.find(item => item.id === id);

  if (!obj) {
    return res.status(404).json({ message: 'Object not found' });
  }

  return res.json(obj);
});
```

In the example above, the `router.get()` method is used to handle a GET request with a URL parameter of :id. The `find()` method is used to search an array of data for an object with the specified id. If the object is not found, we return a 404 error with a JSON message. If the object is found, we return it as JSON.

<p align="right">(<a href="#top">back to top</a>)</p>



## 🗂 Organizing Routes

One way to organize the routes of your Node.js application in a modular and scalable way is to create an `index.router.js` file and define the routes using `router.use()`. This file acts as a central point to import and use all the routes of the application.

To implement this approach, follow these steps:

1. Create a new file called `index.router.js` in the routes folder.
2. Import Express and create a new Router object.
3. Import all the existing route files that you want to include in the index router and define the routes using `router.use()`, passing in the imported routers as middleware.
4. Export the router object for use in other parts of your application.

Here's an example of what your `index.router.js` file might look like:

```
const express = require("express");
const router = express.Router();

// Require all route modules
var todoRouter = require("./todo.router");

// Define all API routes
router.use("/todo", todoRouter);

module.exports = router;
```

5. Now, instead of using a */todo* route in the app.js file, simply import the index router that will contain all the routes of our API.

```
// Require the index.router.js file that contains all the routes for the API
const indexRouter = require("./routes/api/index.router"); // Remove this: var todoRouter = require("./routes/api/todo.router");

// Define the route for the API and use the indexRouter
app.use("/api", indexRouter); // Remove this: app.use("/todo", todoRouter);
```

<p align="right">(<a href="#top">back to top</a>)</p>



## 🏭 Using Mongoose in Your Node.js Application

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides a simple and easy-to-use API to interact with MongoDB databases.

To use Mongoose in your Node.js application, follow these steps:

1. Install the Mongoose package by running the following command in your terminal:

```
npm i mongoose
```

2. Create a new folder called `config` in the root directory of your Node.js project, now create a Mongoose configuration file called `mongoose.js` in the config folder of your project.
3. Import Mongoose in your configuration file.

```
const mongoose = require("mongoose");
```

4. Define variables for the connection string for your database, including default values in case environment variables are not set or are invalid.

```
const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "myapp"

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;
```

5. Set up a connection to your MongoDB database by calling `mongoose.connect()` and passing in the connection string for your database, along with any desired options. Wrap the `mongoose.connect()` method in a **try-catch** block to catch and handle any errors that occur during the connection attempt.

````
const connectDB = async () => {
  try {
    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB database!");
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
  }
};
````

6. Export the connection object for use in other parts of your application.


````
module.exports = { connectDB };
````

7. Import the Mongoose configuration file in your `app.js` file and call the `connectDB()` function to establish a connection to your MongoDB database.

```
const mongoose = require("./config/mongoose");
mongoose.connectDB();
```

<p align="right">(<a href="#top">back to top</a>)</p>



## 🐞 Using Debug


debug is a third-party debugging utility for Node.js that allows you to add flexible and simple debug logging to your code. You can use it to print out helpful messages to the console when running your application in development mode.

To use it in your code, you need to require it and set a debug namespace for your module. Here's an example:



```
const debug = require('debug')('myapp:server');

// ...

debug('Listening on port ' + port);
```

In this example, the debug function is initialized with the namespace `myapp:server`. This namespace allows you to filter the debug output by module or feature. For example, you can enable debug output only for the `myapp:server` namespace by setting the DEBUG environment variable in `.env` like this:

```
DEBUG=myapp:server
```



<details>
<summary><b>🔍💬 Final code of `moongose.js`:</b></summary>
</br>
  


```
const db = mongoose.connection;

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "myapp";
const debug = require("debug")("myapp:server");

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connectDB = async () => {
  try {
    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    debug("Connected to MongoDB database!");
  } catch (err) {
    debug(`Error connecting to MongoDB: ${err}`);
  }
};

module.exports = { connectDB };
```

</details>

<p align="right">(<a href="#top">back to top</a>)</p>



## 💾 Schemas

A schema is a blueprint or structure that defines the logical organization of data within a database. It specifies the tables, fields, relationships, and constraints that make up a database. In the context of Mongoose, a schema defines the structure of a document in a MongoDB collection, including the fields and their data types.

The syntax for defining a schema using Mongoose is:


```
const mySchema = new Schema({
  field1: dataType1,
  field2: dataType2,
  field3: dataType3,
  ...
});
```

In this example, `mySchema` is the name of the schema being defined. Each field in the schema is specified as a key-value pair, where the key is the name of the field and the value is the data type of the field.

### ⚙️ Schema Options

When defining a schema in Mongoose, you can specify additional options for each field, such as:

- **Default Values**: You can define a default value for a field that will be used if no value is provided during document creation. For example:

```
const userSchema = new Schema({
  name: {
    type: String,
    default: "John Doe"
  },
});
```

- **Index Definitions**: You can define indexes on fields to improve performance when searching the database. For example:

```
const userSchema = new Schema({
  name: {
    type: String,
    default: "John Doe"
  },
  email: {
    type: String,
    index: true
  },
});
```

<details>
<summary><b>🔍 More examples.</b></summary>
</br>
  
Some common options that can be used when defining fields in a Mongoose schema:

- `type`: Specifies the type of the field. For example, String, Number, Date, Boolean, Array, or ObjectId.
- `required`: Specifies whether the field is required or not. If set to true, Mongoose will throw a validation error if a document is created or updated without a value for this field.
- `default`: Specifies a default value for the field. If a document is created without a value for this field, Mongoose will use the default value instead.
- `trim`: If set to true, Mongoose will trim whitespace from the beginning and end of strings before saving them.
- `lowercase` and `uppercase`: If set to true, Mongoose will convert strings to lowercase or uppercase before saving them.
</details>

For more information, see the [Mongoose Schema Types](https://mongoosejs.com/docs/2.7.x/docs/schematypes.html) documentation.

### 📝 Creating a Schema in Mongoose

To create a schema in Mongoose, follow these steps:

1. Create a folder called `models` in your project directory.
2. Inside the models folder, create a new file called `todo.model.js` (you can replace todo with the name of the model you want to define).
3. In the `Todo.model.js` file, require Mongoose and define a new Schema object:

<!-- const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({ -->

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema);
```

*In this example, we are defining a Todo model with a title, description, and completed field.*

Then, the code exports the Mongoose model by calling `mongoose.model()` and passing in two arguments: the name of the model, which is 'Todo', and the schema that defines the fields for the model, which is userSchema. This creates a User model that can be used to interact with the users collection in the MongoDB database.

*Note*: The `{ timestamps: true }` is an option that tells Mongoose to automatically manage two timestamp fields in the schema: `createdAt` and `updatedAt`. Mongoose will add a `createdAt` field to the schema which will be set to the current date and time when a new document is **created**, and an `updatedAt` field which will be set to the current date and time every time the document is **updated**.

<p align="right">(<a href="#top">back to top</a>)</p>



## 🎛 Creating Controllers in Node.js with Express


In a Node.js application, a controller is a module that manages the logic for a specific endpoint or group of endpoints. It is used to separate the concerns of handling requests and returning responses from the routes themselves.

By separating the routing logic from the business logic, your code will be more organized and modular, which makes it easier to maintain and scale. Here is a step-by-step guide to creating controllers in your Node.js application using the Express framework:

1. Create a new folder called `controllers` in your project directory.
2. Inside the "controllers" folder, create a new file called `todo.controller.js`.
3. In the "todo.controller.js" file, start by importing the User model that you created earlier. You can do this using the following code:


````
const Todo = require("../models/Todo.model");
````


4. Create a new controller function that will handle a specific action, such as creating a new task, updating a task, or deleting a task. Here's an example of how you can create a new Todo:


```
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ success: true, message: 'Todo created successfully', data: todo });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to save todo', error: err.message });
  }
};
```

<details>
<summary><b>🔍💬 Explanation of code</b></summary>
</br>

Here is an explanation of the code:

- `const todo = await Todo.create(req.body);`: Create a new todo using the Todo model and the request body data, and assign it to the todo variable.
   - The `Todo.create()` method is provided by Mongoose and it creates a new instance of the Todo model and saves it to the database. It takes an object as an argument, which contains the values to be set for the fields defined in the schema.
   - The `req.body` is an object that contains the data received in the HTTP POST request, and it is passed as an argument to the Todo.create() method. Mongoose will create a new Todo document with the fields defined in the schema, populated with the values from req.body.
   - The `await` keyword is used to wait for the `Todo.create()` method to complete before moving on to the next line of code. This ensures that the todo variable is only assigned a value after the document has been saved to the database.
- `try { } catch (error) { }`: If there is an error during the process, it will be caught by the try...catch block and the function will send a 500 status code with a message containing the error message.
</details>


5. Once you've created your controller functions, you can export them so that they can be used by other parts of your application. For example, you could export the createTodo function like this:

```
module.exports = { createTodo };
```

6. Now that we have created the Todo controller, we need to update the user router to use it. To use the user controller, we need to import it into the `todo.router.js` file. We can do this by adding the following code at the top of the file:

```
const todoController = require('../../controllers/todo.controller');
```

7. To create a new Todo task, we need to define a route in the `todo.router.js` file. We can do this by adding the following code:

```
router.post('/', todoController.createTodo);
```

<p align="right">(<a href="#top">back to top</a>)</p>



### 🛠️ Two approaches to create a new document in a controller


This two approaches create a new Todo document with the data sent in the req.body, but the `create()` method in Mongoose combines the process of creating a new document and saving it to the database into a single operation

1.: 
```
const todo = await Todo.create(req.body);
```

2.:
```
const { title, description, completed } = req.body;

const todo = new Todo({
 title: title,
 description: description,
 completed: completed
});

const savedTodo = await todo.save();
```

<details>
<summary><b>🔍💬 Explanation of the second code</b></summary>
</br>
Here is an explanation of the second code:

- `const { title, description, completed } = req.body;`: This code first extracts the title, description, completed fields from the request body using object destructuring.
- `const todo = new Todo({ ... });`: A new instance of the Todo model is created using these values and assigned to the todo variable.
- `const savedTodo = await todo.save();`: The `todo.save()` method is called to save the new user to the database. The returned value from this method, which is the saved user object, is assigned to the savedUser variable.
</details>

<p align="right">(<a href="#top">back to top</a>)</p>



## 🤖 Creating a Helper Function for Better Code Organization

In modern software development, it is common to have utility functions or modules that perform specific tasks and are designed to be reused throughout the codebase. These functions are commonly referred to as helpers.

In this section, we will create a helper function called apiResponse to make our code more organized and easier to maintain.

1. Create a new folder called "helpers" in your project directory. This folder will contain all of our helper functions.
2. In the helpers folder, create a new file called apiResponse.js. This file will contain the code for our apiResponse helper function.
3. In the apiResponse.js file, add the following code:

````
const sendSuccess = (res, statusCode, message, data) => {
  return res.status(statusCode).json({
    status: "sucess",
    code: statusCode,
    message,
    data,
  });
};

const sendError = (res, statusCode, message, error) => {
  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message,
    error,
  });
};

module.exports = { sendSuccess, sendError };
````

<details>
<summary><b>🔍💬 Explanation of code</b></summary>
</br>

- The code defines two helper functions, `sendSuccess` and `sendError`, that are used to send responses back to the client.
- `sendSuccess` The sendSuccess helper is used to send a successful response to the client with a specified HTTP status code, message, and data. It takes four parameters: 
    - `res`, which is the response object, 
    - `statusCode`, which is the HTTP status code to be sent, 
    - `message`, which is a message string,
    - `data`, which is an object containing any data that should be sent along with the response. 

- `sendError` The sendError helper is used to send an error response to the client with a specified HTTP status code, message, and error object. Also takes four parameters: 
    - `res, statusCode, message, and error. 
    - It first checks if the given statusCode is one of the valid status codes, which are 400, 401, 404, and 500. If the statusCode is not valid, it sets it to 500, the default server error status code. The function then returns a JSON object with the status of the response (error), the message, and the error object.
</details>

4. Now that we have created our apiResponse helper function, we can use it in our code. Here is an example of how to use the sendSuccessResponse and sendErrorResponse functions in an controller:

```
const Todo = require("../models/todo.model");
const { sendSuccess, sendError } = require("../helpers/apiResponse");

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    sendSuccess(res, 201, "Todo created successfully", todo);
  } catch (err) {
    sendError(res, 500, error.message, err);
  }
};

module.exports = { createTodo };
```

<p align="right">(<a href="#top">back to top</a>)</p>



## 🔍 Validating Data

Validating user input is a crucial step in building any web application. Express-validator is a middleware module for Express and Node.js that helps in validating incoming request data before it reaches the server. It provides several validation rules to validate the request body, query parameters, and route parameters. In this guide, we'll cover how to use express-validator in your Node.js and Express application to validate user input.

Setting up Express-validator:

To get started, you'll need to install express-validator using npm. Run the following command in your terminal to install the module:

```
npm i express-validator
```

Once installed, follow these steps to create validation using express-validator:

1. Create a new folder called `validators`.
2. Inside the validators folder, create a new file called `todo.validators.js`.
3. Import express-validator in your controller or route file:

````
const { body, param } = require('express-validator');
````

4. Create a validation chain using body() method of express-validator and specify the validation rules. For example, to validate the TItle field:

```
const titleValidation = body("title")
    .notEmpty()
    .withMessage("Title cannot be empty")
    .isString()
    .withMessage("Title must be a string"),
```

In the above example, the `notEmpty()` method ensures that the email field is not empty, and the withMessage method in the express-validator library is used to add a custom error message for a specific validation rule.


4.1. Note that you can use multiple validations in an array and return them like a function, you can create a createUserValidationRules function to define all validation rules for creating a new user.

````
const createTodoValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title cannot be empty")
    .isString()
    .withMessage("Title must be a string"),
  body("description")
    .notEmpty()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description must be a string"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean value"),
];
````

4.2. You can also validate the ID:

```
const idValidation = [param("id").isMongoId().withMessage("Invalid todo ID")];
```

5.  Export all validations:

```
module.exports = {
  createTodoValidationRules,
  idValidation,
};
```

6. Then in your router files, you can import the named exports like this:

```
const todoValidators = require('../../validators/todo.validators');
```

7. Update the post router:

```
router.post(
  "/",
  todoValidators.createTodoValidationRules,
  todoController.createTodo
);
```

<details>
<summary><b>🔍💬 Code progress in `todo.router.js`:</b></summary>
</br>
  

```
var express = require("express");
var router = express.Router();

const todoController = require("../../controllers/todo.controller");

const todoValidators = require("../../validators/todo.validators");

router.post(
  "/",
  todoValidators.createTodoValidationRules,
  todoController.createTodo
);

module.exports = router;
```

</details>


## 👮 Generic validator

In addition to specific validations for each field, you can also create a generic validator that can be used for any validation.

1. Inside the `/validators` folder, create a new file called `index.middleware.js`.
2. Add the following code:


```
const { validationResult } = require("express-validator");
const { sendError } = require("../helpers/apiResponse");

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorResponse = {
      status: 400,
      message: "Validation errors",
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    };
    return sendError(res, 400, "Validation errors", errorResponse);
  }

  next();
};
```

<details>
<summary><b>🔍💬 Explanation of code</b></summary>
</br>
  
- `const { validationResult } = require('express-validator')`; Imports the validationResult function from the express-validator library.
- `validationResult(req);` It is a method provided by the express-validator library that returns an object containing an array of validation *errors* that occurred during the parameter validation. The req parameter is passed to this function to retrieve any validation errors that occurred during the validation process.
- Using `errorResponse` in `apiResponse` returns a JSON object with the errors key, but each error object contains two keys, field and message. This is useful to identify which field caused the error when there are multiple fields being validated.
- `next()`: It is a callback function that tells Express to move on to the next middleware function in the middleware stack. If there are no errors, the next() function is called, and the request is passed on to the next middleware function.
- If there are any errors, the middleware function returns a JSON object with a 400 status code and an array of error messages.
</details>


3. Then in your router files, you can import the validation like this:

```
const runValidations = require("../../validators/index.middleware");
```

4. Update the post router:

```
router.post(
  "/",
  todoValidators.createTodoValidationRules,
  runValidations,
  todoController.createTodo
);
```



<details>
<summary><b>🔍💬 Resu `todo.router.js`:</b></summary>
</br>
  

```
var express = require("express");
var router = express.Router();

const todoController = require("../../controllers/todo.controller");

const todoValidators = require("../../validators/todo.validators");
const runValidations = require("../../validators/index.middleware");

router.post(
  "/",
  todoValidators.createTodoValidationRules,
  runValidations,
  todoController.createTodo
);

module.exports = router;
```

</details>


<p align="right">(<a href="#top">back to top</a>)</p>

## 🔒 Using CORS

CORS stands for "Cross-Origin Resource Sharing" and is a security policy implemented in web browsers to prevent JavaScript code on a web page from accessing resources on a different domain than the current web page.

To use CORS in your Node.js application, follow these steps:

1. Install the CORS package by running the following command in your terminal:

```
npm i cors
```

2. Then, import the package in your `app.js` file:

```
const cors = require("cors");

app.use(cors())
```

<p align="right">(<a href="#top">back to top</a>)</p>

In conclusion, we have successfully created a basic API with at least one route using Node.js. With this API up and running, you can now start testing and exploring the different possibilities for building more complex functionality by adding additional routes and logic to your server code. Good luck!

