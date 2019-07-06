import React, {Component} from 'react';
class ChatBar extends Component {
  constructor(props){
  super(props);
  this.state = {
    username: this.props.defaultUsername,
    message: ''
  };

 }

 handleSubmit = event => {
  // if it's the Enter key, send the username to app
  if (event.key === 'Enter') {
  if(event.target.className === "chatbar-message"){

   this.props.sendMsgContent(event.target.value);
  } // if its the user name check to see if its the same as the default user
   else{
     if(event.target.value !== this.props.defaultUsername){
      this.props.sendUserName(event.target.value)
    }
   }
   
  }
}
  render() {
    
    return (
    <footer className="chatbar">
  <input onKeyUp={this.handleSubmit} className="chatbar-username" placeholder= {this.props.defaultUsername} />
<input onKeyUp={this.handleSubmit} className="chatbar-message" placeholder="Type a message and hit ENTER" />
</footer>

    );
  }
}
export default ChatBar;