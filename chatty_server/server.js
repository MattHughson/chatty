
// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

const sendNotification = (messageData) => {
  const outgoingMsg = messageData;
  // calling our broadcast function
  wss.broadcast(JSON.stringify(outgoingMsg));

};

wss.broadcast = message => {
  // Loops over the collection of clients and send a message to each one
  wss.clients.forEach(client => {
    // Disable the if statement if it's causing you problems
    
     client.send(message);
    // }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));

  ws.on('message', message => {
    const parseMessage = JSON.parse(message);
    console.log(parseMessage.type)
    switch(parseMessage.type) {

      case "postMessage":

          const userId = uuidv4();
          const newMsgObj = {
            id: userId,
            username: parseMessage.username,
            content: parseMessage.content,
            type: 'incomingMessage'
          }
          wss.broadcast(JSON.stringify(newMsgObj));
        // handle incoming message
        break;

      case "postNotification":

      console.log('sever post username ', parseMessage)

        // handle incoming notification
        break;
      default:
        // show an error in the console if the message type is unknown
        throw new Error("Unknown event type " + parseMessage.type);
    }
    // // we need to parse the incoming message

    
    // We're going to take different actions based on the type of message
    
  });
});


