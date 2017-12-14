var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

// we created a server and stored it in a variable, so we can then take it and pass it in our socket function, 
// so basically we are telling socket.io to work on this server
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));


// Socket setup server side: invoke socket function and pass a parameter (the server we want to work with)
var io = socket(server);
// Remember you also need to setup socket.io on client side (public html file).


// so the way that this works is that socket.io is going to be sitting around waiting for some kind of client or browser 
// to make a connection and setup a websocket between the two. So we listen out for when that event connection is made.  
// we are passing in an argument which is going to refer to that instance of the socket which is made (that one particular socket).
// Each client(browser/user) will have their own socket connection with the server. Even when you refresh the page, the socket id will change
// We can then do stuff with this socket object. 
io.on('connection', function(mysocket) {
    console.log('made socket connection', mysocket.id);

    // listen/handle the messages sent to us from the client
    mysocket.on('chat', function(data){
      // this will refer to all different sockets connected to the server viewing the chat room
      io.sockets.emit('chat', data);
      // so now in the front end when we receive the data, we can handle it and put it on the screen
    })
});