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
  }
  ;
    // Called after the component was rendered and it was attached to the
  // DOM. This is a good place to make AJAX requests or setTimeout.
 }
  componentDidMount() {
    // After 3 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 3000)
  }

  render() {
    let dfaultContent = this.state.messages;
    let defaultUsername = this.state.currentUser.name;

    return (
     <div>
      <Header/>
      <MessageList dfaultContent = {dfaultContent}/>
      <ChatBar defaultUsername = {defaultUsername}/>

     </div>
    );
  }
}
export default App;