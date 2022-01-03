import { Box, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Messages } from '../models/message';

interface ShowMessagesProps {
    messages: Messages;
}

const ShowMessages: React.FC<ShowMessagesProps> = ({ messages }: ShowMessagesProps) => {

    return (
        <VStack spacing={4} align="stretch" >
            {messages.map((message, i) => {
                return <Box 
                padding="0 8px" 
                minH="36px" 
                color="white"
                textAlign={message.owner === 'user' ? 'right' : 'left'}
                key={i}>
                    <Text m="0 -8px" p="8px" fontSize="24px"  bg={message.owner === 'user' ? 'gray.500' : 'teal.200'}>{message.text}</Text>
                </Box>
            })}
        </VStack>
    )
}

export default ShowMessages;