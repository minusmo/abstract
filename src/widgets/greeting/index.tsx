import { motion } from 'framer-motion';
import React, { FC } from 'react';

import GrahpicsContainer from '../../components/grahpics';

import FallbackGreeting from './fallbackGreeting';

interface IGreetingContainer {}
const GreetingContainer: FC<IGreetingContainer> = ({}: IGreetingContainer) => {
  const isGLEnabled = true;
  if (isGLEnabled) return <GrahpicsContainer />;

  return <FallbackGreeting />;
};

export default GreetingContainer;
