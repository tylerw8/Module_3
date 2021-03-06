//Tyler Waite Module 3 simple server version 1.0.0 4/28/2015
// make this a simple http server that writes to the response stream object
//var http = require('http');

//var server = http.createServer();
//var dayName = enhancedDate.getDate.getDayName();
//var monthName = enhancedDate.getDate.getMonth();
//var dayNum = enhancedDate.getDate.getDate();
//var todaysTrucks = trucks.filterByDay();
//
//server.on('request', function(response){
//  
//  response.writeHead(200, {'Content-Type':'text/plain'});
//  response.write('Today is ' + dayName + monthName + dayNum);
//  response.write('The food trucks available are:' + foodTrucks.filterByDay(dayName));
//  
//});
//
//server.listen(3000, function () {
//    console.log('listening on port 3000');
//});
  
  
//James week 5 in class answer
var http = require('http');
var enhancedDate = require('./enhancedDate');
var filterByDay = require('./trucks');
  
http.createServer(function (request, response) {
  var currentDay = enhancedDate.getDayName();
  var currentMonth = enhancedDate.getMonthName();
  var today = new Date();
  var date = today.getDate();
  var trucks = filterByDay(currentDay);
  var truckHTML = '<ul>';
  var i;
  var l;
  
  trucks.forEach(function (truck) {
      truckHTML += '<li>' + truck.name + '</li>';
  });
  truckHTML += '</ul>';
  
  response.writeHead(200, {'content-Type': 'text/html'});
  response.write('<h3>Today is ' + currentDay + ' ' + currentMonth + ' ' + date + 'Here are the available food trucks:</h3>');
  response.write(truckHTML);
  response.end();
  
}).listen(3000, function(){
  console.log('listening on port 3000');
});