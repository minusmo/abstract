import React, { FC } from 'react';

import GrahpicsPresenter from './presenter';
import usePoints from './usePoints';

const GrahpicsContainer: FC = () => {
  const { points, colors, rotationDirections } = usePoints();
  return (
    <GrahpicsPresenter
      points={points}
      colors={colors}
      rotationDirections={rotationDirections}
      augmentedPoints={points}
    />
  );
};

export default GrahpicsContainer;
