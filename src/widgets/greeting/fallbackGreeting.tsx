import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

const FallbackGreeting: FC = () => (
  <Box>
    <Heading as="h1" size="4xl">
      Hi There!
    </Heading>
  </Box>
);

export default FallbackGreeting;
