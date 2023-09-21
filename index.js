// Requiring module
const express = require('express')
const path = require('path');
// Creating express object
const app = express()
const port = 8000;


app.set('view engine','ejs');

// Function to serve all static files
app.use(express.static('public'));
// app.use('/static',express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // res.send('<h1>Phornhathai Thanomwong</h1>')
  res.render(__dirname + '/views/index.ejs', {name : "Phornhathai" , lastname : "Thanomwong"});
});
app.get('/about', (req, res) => {
  // res.send('<h1>Phornhathai Thanomwong</h1>')
  res.render(__dirname + '/views/about.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
