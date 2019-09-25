var express = require('express')
var router = express.Router()

var promise_message = "";
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the localhost:8080/birds homepage
router.get('/', function (req, res) {
  Promise.all([promise1]).then(printResult);
  res.send('Birds home page' + promise_message)
})
// define the localhost:8080/birds/about homepage
router.get('/about', function (req, res) {
  res.send('About birds')
})


var printResult = (results) => {console.log("Results = ", results, "message = ", promise_message)}
promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      promise_message += "1 my";
        resolve(promise_message);
    }, 2000)
})
//The app will now be able to handle requests to /birds and /birds/about, as well as call the timeLog middleware function that is specific to the route.

module.exports = router