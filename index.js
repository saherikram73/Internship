// app.js
const express = require('express');
// const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 8000;

// Middleware to parse incoming JSON data
app.use(express.json());
//showing users
app.get('/users',(req,res)=>{
   const users = JSON.parse(fs.readFileSync("users.json", "utf8"));
  res.json(users);
})
// Route to handle POST request
app.post('/users', (req, res) => {
  const userData = req.body;
  console.log('Received user data:', userData);

  // Write user data to a file
  fs.writeFile('users.json', JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
    console.log('User data written to users.json');
    res.send('User data saved successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
