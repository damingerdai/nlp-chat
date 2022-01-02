import { Box, VStack } from '@chakra-ui/react';
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
                minH="48px" 
                bg={message.owner === 'user' ? 'gray.500' : 'teal.200'}
                fontSize="24px" 
                color="white"
                textAlign={message.owner === 'user' ? 'right' : 'left'}
                key={i}>
                    {message.text}
                </Box>
            })}
        </VStack>
    )
}

export default ShowMessages;