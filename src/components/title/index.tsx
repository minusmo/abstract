import React, { FC } from 'react';

import { As } from '@chakra-ui/react';

import TitlePresenter from './presenter';

interface ITitleContainer {
  heading: string;
  tag: As<any> | undefined;
}
const HeadingContainer: FC<ITitleContainer> = ({
  heading,
  tag,
}: ITitleContainer) => <TitlePresenter heading={heading} tag={tag} />;

export default HeadingContainer;
