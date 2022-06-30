const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all todo
app.get("/todos", async (req, res) => {
  try {
    const alltodo = await pool.query("SELECT * FROM todo ");
    res.json(alltodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
app.get("/todos/:todo_list", async (req, res) => {});

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
