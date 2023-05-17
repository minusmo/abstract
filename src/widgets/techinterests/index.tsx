import React, { FC } from 'react';

import { Center } from '@chakra-ui/react';

import TechInterestsPresenter from './presenter';

const TechInterestsContainer: FC = () => (
  <Center id={'section-1'}>
    <TechInterestsPresenter />
  </Center>
);

export default TechInterestsContainer;
