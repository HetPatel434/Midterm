const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CRUD Form</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>CRUD Form</h1>
      <form action="/items" method="POST">
        <input type="text" name="name" placeholder="Item name" required>
        <button type="submit">Add Item</button>
      </form>
      <h2>Items:</h2>
      <ul>
        <li>Item 1 <a href="/items/1/edit">Edit</a> <a href="/items/1/delete">Delete</a></li>
        <li>Item 2 <a href="/items/2/edit">Edit</a> <a href="/items/2/delete">Delete</a></li>
        <li>Item 3 <a href="/items/3/edit">Edit</a> <a href="/items/3/delete">Delete</a></li>
      </ul>
    </body>
    </html>
  `);
});

app.post('/items', (req, res) => {
  // Add your MongoDB insertion code here
  res.redirect('/');
});

app.get('/items/:id/edit', (req, res) => {
  res.send('Edit item form');
});

app.post('/items/:id', (req, res) => {
  // Add your MongoDB update code here
  res.redirect('/');
});

app.get('/items/:id/delete', (req, res) => {
  // Add your MongoDB delete code here
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
