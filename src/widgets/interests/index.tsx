import React, { FC } from 'react';

import { Center, VStack } from '@chakra-ui/react';

import PersonalInterests from './PersonalInterests';
import TechInterests from './TechInterests';

const Interests: FC = () => (
  <Center id={'interests'}>
    <VStack spacing={5}>
      <TechInterests />
      <PersonalInterests />
    </VStack>
  </Center>
);

export default Interests;
