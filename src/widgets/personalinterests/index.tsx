import React, { FC } from 'react';

import { Center } from '@chakra-ui/react';

import PersonalInterestsPresenter from './presenter';

const PersonalinterestsContainer: FC = () => (
  <Center id="section-4" w={'100vw'}>
    <PersonalInterestsPresenter />
  </Center>
);

export default PersonalinterestsContainer;
