import React, { FC } from 'react';

import GrahpicsPresenter from './presenter';
import usePoints from './usePoints';

interface IGrahpicsContainer {}
const GrahpicsContainer: FC = ({}: IGrahpicsContainer) => {
  const { points } = usePoints();
  return <GrahpicsPresenter points={points} />;
};

export default GrahpicsContainer;
