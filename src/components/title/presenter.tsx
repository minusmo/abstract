import React, { FC } from 'react';

import { Heading } from '@chakra-ui/react';

interface ITitlePresenter {
  heading: string;
}

const TitlePresenter: FC<ITitlePresenter> = ({ heading }: ITitlePresenter) => (
  <Heading>{heading}</Heading>
);

export default TitlePresenter;
