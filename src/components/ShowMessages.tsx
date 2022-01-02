import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

interface ShowMessagesProps {
    messages: string[];
}

const ShowMessages: React.FC<ShowMessagesProps> = ({ messages }: ShowMessagesProps) => {
    return (
        <VStack spacing={4} align="stretch" >
            {messages.map((message, i) => {
                return <Box padding="0 8px" minH="48px" bg='teal.200' fontSize="24px" color="white" key={i}>{message}</Box>
            })}
        </VStack>
    )
}

export default ShowMessages;