const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  // res.send('<h1>Phornhathai Thanomwong</h1>')
  res.render(__dirname + '/views/index.ejs', {name : "Phornhathai" , lastname : "Thanomwong"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
