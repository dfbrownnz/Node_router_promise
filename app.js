var birds = require('./birds')
var express = require('express')
var app = express()
//The app will now be able to handle requests to /birds and /birds/about, as well as call the timeLog middleware function that is specific to the route.
var output = "";

app.use('/birds', birds)

app.get('/', function (req, res) {
  output =" This shows routing on a separate js file and many promises"; 
output += "<a href='http://localhost:8080/birds'>Birds shows promise call</a> <br>"
output += "<a href='http://localhost:8080/birds/about'>Birds / About</a> <br>"
output += "<a href='http://localhost:8080/users/dfbrownnz/books/dfbBookid'>User and Book ID </a> <br>"
output += "<a href='http://localhost:8080/'>Main </a> <br>"
output += "hello world";
res.send(output)
})

//http://localhost:8080/users/dfbrownnz/books/dfbBookid
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(8080);
console.log('8080 is the magic port');

