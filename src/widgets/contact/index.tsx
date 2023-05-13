import React, { FC } from 'react';

import { EditIcon, PhoneIcon, PlusSquareIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { AiOutlineMail, BsGithub, BsLinkedin, BsPhone } from 'react-icons/all';

interface IContact {}
const Contact: FC<IContact> = ({}: IContact) => (
  <Container centerContent width={'100vw'} height={'25vh'}>
    <Heading marginBottom={10}>Do Something fun together!</Heading>
    <List>
      <ListItem>
        <ListIcon as={BsPhone} />
        +8210-6395-9161
      </ListItem>
      <ListItem>
        <ListIcon as={AiOutlineMail} />
        bldolphin96@gmail.com
      </ListItem>
      <ListItem>
        <ListIcon as={BsGithub} />
        <Link href="https://github.com/minusmo">Github/minusmo</Link>
      </ListItem>
      <ListItem>
        <ListIcon as={BsLinkedin} />
        <Link href="https://www.linkedin.com/in/hojoon-eum-99731912a/">
          LinkedIn/minusmo
        </Link>
      </ListItem>
    </List>
  </Container>
);

export default Contact;
