import { Box, Flex, Spacer, Link } from '@chakra-ui/react';

const Navbar = () => {

    return (<Flex h="48px" p="8px 16px" bg="teal.300" color="white">
       <Box>
           Nlp Chat
       </Box>
       <Spacer/>
       <Box>
           <Link href='https://github.com/damingerdai/nlp-chat'>
                Github
           </Link>    
       </Box>
    </Flex>);
}

export default Navbar;