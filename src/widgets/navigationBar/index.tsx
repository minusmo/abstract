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
        <MenuItem>
          <Link href="">Older Blog</Link>
        </MenuItem>
        <MenuItem>
          <Link href="">Newer Blog</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

const NavigationBar: FC = ({}: INavigationBar) => (
  <Box position="sticky" top={0} padding={5} zIndex={100}>
    <Grid templateColumns="repeat(5,1fr)" gap={2}>
      <GridItem colSpan={2}>
        <Avatar
          size="xl"
          name="HoJoon Eum"
          src="https://picsum.photos/200/200"
        />
      </GridItem>
      <GridItem colStart={8} colEnd={10}>
        <SimpleGrid columns={2} gap={2} alignItems={'center'}>
          <Button leftIcon={<Icon as={BsGithub} />}>Github</Button>
          <BlogMenu />
        </SimpleGrid>
      </GridItem>
    </Grid>
  </Box>
);

export default NavigationBar;
