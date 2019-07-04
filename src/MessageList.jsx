import React, {Component} from 'react';
import Message from './Message.jsx'
class MessageList extends Component {
  constructor(props){
    super(props);
  
   }

  render() {
    let contentArray = this.props.dfaultContent
    let messages = contentArray.map((data) => (
      <Message data={data} key= {data.id}/>

    ));


    
    return (
      <main className="messages">
{messages}
</main>
    );
  }
}
export default MessageList;

