import { Box, Button, Container, Flex, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const Chatroom = () => {

    const [message, setMessage] = React.useState<string>('');
    const [messages, setMessages] = React.useState<string[]>([]);

    return (<React.Fragment>
        <Container>
            <VStack spacing={4} align="stretch" marginTop="16px">
                {messages.map((m, i) => {
                    return <Box padding="0 8px" h='48px' bg='teal.200' fontSize="24px" color="white" key={i}>{m}</Box>
                })}
            </VStack>
            <Flex marginTop="16px">
                <Input value={message} onChange={(e) => setMessage(e.target.value)}></Input>
                <Button disabled={!message} colorScheme='teal' onClick={(e) => {
                     setMessages([...messages, message]);
                     setMessage('');
                }}>Send</Button>
            </Flex>
        </Container>
    </React.Fragment>)
}

export default Chatroom;