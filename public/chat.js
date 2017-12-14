// in this file we want to establish that connection to the server to create this websocket between the two.


// this is the socket of the front end (client), it has nothing to do with the socket in index.js (server)
// io is from library loaded in html page (https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js),
// it has nothing to do with io variable in index.js (server)

var front_end_socket = io.connect("http://localhost:4000"); 
// now when we load up the index.html file in the browser it will make a connection
// aka a socket running between the client(the browser) and the server


// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');



// We want to emit an event when someone clicks send
// the emit function takes 2 parameters: name of the message, what the actual message is (aka a data object we are sending to the server)
btn.addEventListener('click', function(){
  front_end_socket.emit('chat', {
    mymessage: message.value,
    myhandle: handle.value,
  });
});



// Listen for events (chat event from the server) and output data in the DOM
front_end_socket.on('chat', function(data){
  output.innerHTML += "<p><strong>" + data.myhandle + ": </strong>" + data.mymessage + "</p>";
})