import React, { Component } from 'react'

 class Notification extends Component {

    render() {

        return (
//message notification
            <div>
                <span style={{color: 'purple'}} className="message-system">{this.props.dataName.old} changed their name to {this.props.dataName.name}</span>

            </div>
        )
    }
}

export default Notification;