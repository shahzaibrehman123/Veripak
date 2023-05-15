const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const connection = require("./db");

// Create an Express application
const app = express();

// Define an API endpoint to retrieve products
app.get("/category", (req, res) => {
  const category = req.query.category; // Get the category from the query parameter

  // Execute the SQL query
  const query = "SELECT * FROM veripak WHERE `Category L1` = ?";
  connection.query(query, [category], (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

app.get("/products", (req, res) => {
  const category = req.query.category; // Get the category from the query parameter
  const brand = req.query.brand; // Get the brand from the query parameter

  // Execute the SQL query
  const query =
    "SELECT `Category L2`,`Brand` FROM veripak WHERE `Category L1` = ? AND `Brand` = ?";
  connection.query(query, [category, brand], (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

app.get("/brands", (req, res) => {
  // Execute the SQL query
  const query = "SELECT DISTINCT `Brand` FROM veripak";
  connection.query(query, (error, results, fields) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

app.get("/category1", (req, res) => {
  const brand = req.query.brand; // Get the brand from the query parameter

  // Execute the SQL query
  const query = "SELECT DISTINCT `Category L1` FROM veripak WHERE `Brand` = ?";
  connection.query(query, [brand], (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

app.get("/category1all", (req, res) => {
  // Execute the SQL query
  const query = "SELECT DISTINCT `Category L1` FROM veripak";
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

app.get("/category2", (req, res) => {
  const category = req.query.category; // Get the brand from the query parameter

  // Execute the SQL query
  const query =
    "SELECT DISTINCT `Category L2` FROM veripak WHERE `Category L1` = ?";
  connection.query(query, [category], (error, results) => {
    if (error) {
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http:\\localhost.com:${port}`);
});
