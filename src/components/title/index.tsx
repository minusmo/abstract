import React, { FC } from 'react';

import TitlePresenter from './presenter';

interface ITitleContainer {
  heading: string;
}

const HeadingContainer: FC<ITitleContainer> = ({
  heading,
}: ITitleContainer) => <TitlePresenter heading={heading} />;

export default HeadingContainer;
