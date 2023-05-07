import React, { FC } from 'react';
import GreetingPresenter from './presenter';

interface IGreetingContainer {}
const GreetingContainer: FC<IGreetingContainer> = ({}: IGreetingContainer) => {
  return <GreetingPresenter />;
};

export default GreetingContainer;
