import React, { FC } from 'react';
import NavbarPresenter from './presenter';

interface INavbarContainer {}
const NavbarContainer: FC<INavbarContainer> = ({}: INavbarContainer) => {
  return <NavbarPresenter />;
};

export default NavbarContainer;
