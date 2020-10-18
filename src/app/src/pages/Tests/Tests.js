import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {addMessage} from "../../store/actions/chatActions";
import createSocketClient from "../../http/socketClient"

const Tests = (props) => {
    const [message, setMessage] = useState([]);
    const [socketClient, setSocketClient] = useState(null);

    useEffect(() => {
        const client = createSocketClient();

        client.on('chat_message', props.addMessage);
        client.on('join_to_chat', props.addMessage);
        client.on('left_from_chat', props.addMessage);
        client.emit('username');

        setSocketClient(client);

        return () => client.disconnect();
    }, []);

    const sendMessage = () => {
        socketClient.emit('chat_message', message);
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



