import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import socketIo from "socket.io-client";
import {addMessage} from "../../store/actions/chatActions";
import storage from "../../storage/storage";

const Tests = (props) => {
    const [message, setMessage] = useState([]);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = socketIo("http://localhost:4000", {
            query: {
                authorization: `Bearer ${storage.token.get()}`
            }
        });

        socketRef.current.on('chat_message', props.addMessage);
        socketRef.current.on('join_to_chat', props.addMessage);
        socketRef.current.on('left_from_chat', props.addMessage);
        socketRef.current.emit('username');

        return () => socketRef.current.disconnect();
    }, []);

    const sendMessage = () => {
        socketRef.current.emit('chat_message', message);
        setMessage('');
    }

    return (
        <React.Fragment>
            <h2>Test Page</h2>
            <h3>Current User</h3>
            <pre>
                {JSON.stringify(props.user, null, 2) }
            </pre>

            <h3>Test chat. Enter your message:</h3>

            <input type="text" onChange={e => setMessage(e.target.value)} value={message} />
            <button type="button" onClick={sendMessage}>Send</button>

            <ul>
                {props.messages.map(x => (<li key={x}>{x}</li>))}
            </ul>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.current,
        messages: state.chat.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (message) => dispatch(addMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tests);



