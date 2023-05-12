import React, { FC } from 'react';
import SkillsPresenter from './presenter';

interface ISkillsContainer {}
const SkillsContainer: FC<ISkillsContainer> = ({}: ISkillsContainer) => {
  return <SkillsPresenter />;
};

export default SkillsContainer;
