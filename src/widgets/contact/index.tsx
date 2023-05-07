import React, { FC } from 'react';

import { PhoneIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { Container, Link, List, ListIcon, ListItem } from '@chakra-ui/react';

interface IContact {}
const Contact: FC<IContact> = ({}: IContact) => (
  <Container centerContent width={'100vw'} height={'25vh'}>
    <List>
      <ListItem>
        <ListIcon as={PhoneIcon} />
        +8210-6395-9161
      </ListItem>
      <ListItem>
        <ListIcon as={PlusSquareIcon} />
        <Link href="https://github.com/minusmo">minusmo</Link>
      </ListItem>
    </List>
  </Container>
);

export default Contact;
