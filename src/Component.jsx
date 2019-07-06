import React, { Component } from 'react'

 class Notification extends Component {

    render() {

        return (

            <div>

                <span style={{color: 'red'}} className="message-system">{this.props.dataName.old} changed their name to {this.props.dataName.name}</span>

            </div>
        )
    }
}

export default Notification;