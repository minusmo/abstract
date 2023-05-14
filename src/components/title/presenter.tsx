import React, { FC } from 'react';

import { As, Heading } from '@chakra-ui/react';

interface ITitlePresenter {
  heading: string;
  tag: As<any> | undefined;
}
const TitlePresenter: FC<ITitlePresenter> = ({
  heading,
  tag,
}: ITitlePresenter) => <Heading as={tag}>{heading}</Heading>;

export default TitlePresenter;
