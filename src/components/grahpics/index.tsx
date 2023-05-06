import React, { FC } from 'react';
import GrahpicsPresenter from './presenter';

interface IGrahpicsContainer {}
const GrahpicsContainer: FC = ({}: IGrahpicsContainer) => {
  return <GrahpicsPresenter />;
};

export default GrahpicsContainer;
