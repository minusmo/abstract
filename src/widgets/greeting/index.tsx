import React, { FC } from 'react';

import GrahpicsContainer from '../../components/grahpics';

import FallbackGreeting from './fallbackGreeting';
import { useDetectGPU } from '@react-three/drei';

interface IGreetingContainer {}
const GreetingContainer: FC<IGreetingContainer> = ({}: IGreetingContainer) => {
  const GPUTier = useDetectGPU();
  if (GPUTier.type === 'WEBGL_UNSUPPORTED') return <FallbackGreeting />;

  return <GrahpicsContainer />;
};

export default GreetingContainer;
