const express = require('express');
const mysql = require('mysql');

const app = express();

$.get('/users', (data) => {
    // Handle response
  });

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'Local instance wampmysqld64',
  user: 'root',
  password: '',
  database: 'users'
});

// Connect to MySQL database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// Create a route to handle button press
app.get('/users', (req, res) => {
  // Query the database for user information
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return;
    }
    // Send the user information as a JSON response
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
