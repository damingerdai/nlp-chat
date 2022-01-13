import { Box, Flex, Spacer, Link, useColorMode } from '@chakra-ui/react';
import ThemePicker from './ThemePicker';

const Navbar = () => {
    const { colorMode } = useColorMode();
    
    return (<Flex h="48px" p="8px 16px" bg={ colorMode === 'light' ? 'teal.300' : 'teal.700'} color={ colorMode === 'light' ? 'white' : 'gray.900'}>
        <Box>
            Nlp Chat
        </Box>
        <Spacer />
        <Box marginRight={2}>
            <ThemePicker />
        </Box>
        <Box>
            <Link href='https://github.com/damingerdai/nlp-chat'>
                Github
            </Link>
        </Box>
    </Flex>);
}

export default Navbar;