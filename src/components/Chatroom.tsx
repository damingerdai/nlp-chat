import { Container } from '@chakra-ui/react';
import React from 'react';
import SendMessage from './SendMessage';
import ShowMessages from './ShowMessages';

const Chatroom = () => {

    const [messages, setMessages] = React.useState<string[]>([]);

    return (<React.Fragment>
        <Container padding="16px 0">
            <ShowMessages messages={messages}/>
            <SendMessage sendMessage={(message) => {
                setMessages([...messages, message])
            }}/>
        </Container>
    </React.Fragment>)
}

export default Chatroom;