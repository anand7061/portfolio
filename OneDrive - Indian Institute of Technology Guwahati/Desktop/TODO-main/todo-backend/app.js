const path = require('path');

// External Module
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
//mongodb+srv://anandkumarchatra969_db_user:iRmBf6d0kSSo0zvL@cluster0.vmohkj8.mongodb.net/
const DB_PATH = "mongodb+srv://anandkumarchatra969_db_user:iRmBf6d0kSSo0zvL@cluster0.vmohkj8.mongodb.net/";
//const DB_PATH = "mongodb+srv://todo_000:rBfkUsk5jD69Tagh@cluster0.y02xka1.mongodb.net/";
const todoItemsRouter = require("./routes/todoItemsRouter")
const errorsController = require("./controllers/errors");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

const PORT = 3005;

mongoose.connect(DB_PATH).then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});