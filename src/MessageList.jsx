import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Component.jsx';

class MessageList extends Component {
  constructor(props){
    super(props)
  
   }

  render(){
    const messages = this.props.dfaultContent.map(data => {
      switch(data.type) {
       case "incomingMessage":
       return <Message data={data} key= {data.id}/>
      case "incomingNotification":
        console.log("inc", data)
       return <Notification dataName={data} key={data.id} />
      }
    })
    
    return(
      <div>{messages}</div>
    )

  
  }}
    


    
export default MessageList
