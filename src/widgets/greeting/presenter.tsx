import React, { FC } from 'react';

import { Container } from '@chakra-ui/react';

import Text from '../../components/text';

interface IGreeting {}
const Greeting: FC = ({}: IGreeting) => (
  <Container bg="whiteAlpha.800" centerContent width={'100vw'} height={'100vh'}>
    <Text content="Hi There!" />
  </Container>
);

export default Greeting;
