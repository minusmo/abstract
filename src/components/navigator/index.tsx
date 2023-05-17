import React, { FC } from 'react';
import NavigatorPresenter from './presenter';

interface INavigatorContainer {}

const NavigatorContainer: FC<
  INavigatorContainer
> = ({}: INavigatorContainer) => {
  return <NavigatorPresenter />;
};

export default NavigatorContainer;
