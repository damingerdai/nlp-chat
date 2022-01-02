import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

interface SendMessageProps {
    sendMessage: (message: string) => void;
}

const SendMessage: React.FC<SendMessageProps> = ({ sendMessage }: SendMessageProps) => {

    const [message, setMessage] = React.useState<string>('');

    return <Flex marginTop="16px">
        <Input value={message} onChange={(e) => {
            setMessage(e.target.value);
        }} onKeyPress={(e) => {
            if (e.keyCode === 13 || e.charCode === 13 || e.code === 'Enter') {
                setMessage('');
                sendMessage(message);
            }
        }} />
        <Button disabled={!message} onClick={(e) => {
            setMessage('');
            sendMessage(message);
        }}>Send</Button>
    </Flex>
}

export default SendMessage;