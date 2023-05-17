import React, { FC } from 'react';
import { AiOutlineMail, BsGithub, BsLinkedin } from 'react-icons/all';
import {
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  VStack,
} from '@chakra-ui/react';

interface IContact {}

const Contact: FC<IContact> = ({}: IContact) => (
  <Center padding={10} textAlign={'center'} id={'section-4'}>
    <VStack>
      <Heading fontSize={['xl', '2xl', '4xl']} marginBottom={10}>
        Do Something Fun Together!
      </Heading>
      <Heading fontSize={['sm', 'md', 'lg', 'xl', '2xl', '4xl']}>
        This is just an abstract of myself.
      </Heading>
      <Heading fontSize={['sm', 'md', 'lg', 'xl', '2xl', '4xl']}>
        {' '}
        To know who really I am, please contact me.
      </Heading>
      <List marginTop={5}>
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
            LinkedIn/hojooneum
          </Link>
        </ListItem>
      </List>
    </VStack>
  </Center>
);

export default Contact;
