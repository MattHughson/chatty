import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h4 className="navbar-usercount">{this.props.counter} users online</h4>
      </nav>
      );
    }
  
}
export default Header;

