import React, {Component} from 'react';
import MessageList from './MessageList.jsx'
import ChatBar from './ChatBar.jsx'
import Header from './Header.jsx'


class App extends Component {
 // Set initial state so the component is initially "loading"
 constructor(props) {
  super(props);
  // this is the *only* time you should assign directly to state:
  this.state = {
    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [
      {
        id: '6667823',
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        id: '6667824',
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
    ]
  };
  this.SocketServer = undefined;
 }

 componentDidMount() {
  console.log("componentDidMount <App />");
  this.SocketServer = new WebSocket('ws://localhost:3001');
  console.log('connectd to websocket server')
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)

    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);

  this.SocketServer.onmessage = (event) => {
  let newData=JSON.parse(event.data);
  console.log("eventbeforeswitch", event)
  switch(newData.type) {
    case "incomingMessage":
      let newArray = [...this.state.messages,newData]
  this.setState({messages: newArray})
      break;
    case "incomingNotification":
      console.log('usermessagedata', newData)
      break;
    default:
      // show an error in the console if the message type is unknown
      throw new Error("Unknown event type " + newData.type);
  }


 }

}
//getting username from chatbar
sendUserName = userContent => {   
  let userContentObj = {
    type: 'postNotification',
    name: userContent
  
  }
  this.setState({currentUser: userContentObj})


  //this.SocketServer.send(JSON.stringify(userContentObj))
  };


 sendMsgContent = msgContent => { 
  
    let messageObj = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: msgContent,
    
    }

    this.SocketServer.send(JSON.stringify(messageObj))
};

  render() {
    let dfaultContent = this.state.messages;
    let defaultUsername = this.state.currentUser.name;

    return (
     <div>
      <Header/>
      <MessageList dfaultContent = {dfaultContent} defaultUsername = {defaultUsername}/>
      <ChatBar defaultUsername = {defaultUsername} sendMsgContent = {this.sendMsgContent} sendUserName = {this.sendUserName}/>

     </div>
    );
  }
}
export default App;