import React, { FC } from 'react';
import { BsGithub, RxReader } from 'react-icons/all';

import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from '@chakra-ui/react';

interface INavigationBar {}

function BlogMenu() {
  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<Icon as={RxReader} />}>
        Blogs
      </MenuButton>
      <MenuList>
        <Link href="https://minusmo.github.io/">
          <MenuItem>Older Blog</MenuItem>
        </Link>
        <Link href="https://medium.com/@bldolphin96">
          <MenuItem>Newer Blog</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

const NavigationBar: FC = ({}: INavigationBar) => (
  <Box position="sticky" top={0} padding={5} zIndex={100}>
    <Grid templateColumns="repeat(5,1fr)" gap={2}>
      <GridItem colSpan={2}>
        <Avatar size="lg" name="HoJoon Eum" src="/src/assets/favicon.png" />
      </GridItem>
      <GridItem colStart={8} colEnd={10}>
        <SimpleGrid columns={2} gap={2} alignItems="center">
          <Link href="https://github.com/minusmo">
            <Button leftIcon={<Icon as={BsGithub} />}>Github</Button>
          </Link>
          <BlogMenu />
        </SimpleGrid>
      </GridItem>
    </Grid>
  </Box>
);

export default NavigationBar;
