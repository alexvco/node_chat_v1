// in this file we want to establish that connection to the server to create this websocket between the two.


// this is the socket of the front end (client), it has nothing to do with the socket in index.js (server)
// io is from library loaded in html page (https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js),
// it has nothing to do with io variable in index.js (server)

var font_end_socket = io.connect("http://localhost:4000"); 
// now when we load up the index.html file in the browser it will make a connection
// aka a socket running between the client(the browser) and the server