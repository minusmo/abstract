import React, { FC } from 'react';

import TitlePresenter from './presenter';

interface ITitleContainer {
  heading: string;
  tag: string;
}
const HeadingContainer: FC<ITitleContainer> = ({
  heading,
  tag,
}: ITitleContainer) => <TitlePresenter heading={heading} tag={tag} />;

export default HeadingContainer;
