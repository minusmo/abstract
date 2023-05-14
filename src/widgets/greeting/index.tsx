import React, { FC } from 'react';

import GrahpicsContainer from '../../components/grahpics';

import FallbackGreeting from './fallbackGreeting';

interface IGreetingContainer {}
const GreetingContainer: FC<IGreetingContainer> = ({}: IGreetingContainer) => {
  const isGLEnabled = document.createElement('canvas').getContext('webgl');
  if (isGLEnabled !== null) return <GrahpicsContainer />;

  return <FallbackGreeting />;
};

export default GreetingContainer;
