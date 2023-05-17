import React, { FC } from 'react';
import TextPresenter from './presenter';

interface ITextContainer {
  content: string;
}

const TextContainer: FC<ITextContainer> = ({ content }: ITextContainer) => {
  return <TextPresenter content={content} />;
};

export default TextContainer;
