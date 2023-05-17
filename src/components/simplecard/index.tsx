import React, { FC } from 'react';

import SimpleCardPresenter from './presenter';

interface ISimplecardContainer {
  headerText: string;
  bodyImg: string;
  altText: string;
  footerText: string;
}

const SimplecardContainer: FC<ISimplecardContainer> = ({
  headerText,
  bodyImg,
  altText,
  footerText,
}: ISimplecardContainer) => (
  <SimpleCardPresenter
    headerText={headerText}
    bodyImg={bodyImg}
    altText={altText}
    footerText={footerText}
  />
);

export default SimplecardContainer;
