import React, { FC } from 'react';

import { Container } from '@chakra-ui/react';
import FallbackGreeting from './fallbackGreeting';

interface IGreeting {}

const Greeting: FC = ({}: IGreeting) => (
  <Container bg="whiteAlpha.800" centerContent width="100vw" height="100vh">
    <FallbackGreeting />
  </Container>
);

export default Greeting;
