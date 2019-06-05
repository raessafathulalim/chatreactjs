import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends React.Component {


    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }

    render() {

        return (
            <div className="message-list">

                {this.props.messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            username={message.sender.name} 
                            text={message.parts[0].payload.content}
                        />
                    )
                })}
            </div>
        )
    }
}

export default MessageList