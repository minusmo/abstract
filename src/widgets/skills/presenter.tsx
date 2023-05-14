import { motion } from 'framer-motion';
import React, { FC } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Code,
  Divider,
  Heading,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const SkillsPresenter: FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 3 }}
    viewport={{ once: false }}
  >
    <Center
      id={'section-2'}
      h={{
        base: 'auto',
        xl: '100vh',
      }}
    >
      <Card>
        <CardHeader>
          <Heading fontSize={['lg', 'xl', '2xl']}>
            Skills I have(Just a part)
          </Heading>
        </CardHeader>
        <CardBody>
          <Wrap spacing={5} alignItems="center" justify="center">
            <WrapItem>
              <Card variant="outline" width="100%" h="100%">
                <CardHeader>
                  <Heading as="h2" fontSize="3xl">
                    Soft Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <UnorderedList>
                    <ListItem>Fluent Communication</ListItem>
                    <ListItem>Project Leadership</ListItem>
                    <ListItem>Agile Process Experience</ListItem>
                  </UnorderedList>
                </CardBody>
              </Card>
            </WrapItem>
            <WrapItem>
              <Card variant="outline" width="100%" h="100%">
                <CardHeader>
                  <Heading as="h2" fontSize="3xl">
                    Tech Skills
                  </Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={1}>
                    <Stat>
                      <StatLabel>
                        <Text as="em" fontSize="2xl">
                          Programming Languages
                        </Text>
                      </StatLabel>
                      <StatNumber>
                        <Code colorScheme="blue">
                          C(-), C++(-), Java(-), Python(⇧), Js(⇧), Ts(⇧), Go(⇩)
                        </Code>
                      </StatNumber>
                    </Stat>
                    <Divider />
                    <Stat>
                      <StatLabel>
                        <Text as="em" fontSize="2xl">
                          Experieced Tech Stacks(One For Each)
                        </Text>
                      </StatLabel>
                      <StatNumber>
                        <Code colorScheme="red">
                          Frontend(React), Backend(Node.js), DB(MySQL),
                          AI(Pytorch)
                        </Code>
                      </StatNumber>
                    </Stat>
                  </VStack>
                </CardBody>
              </Card>
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </Center>
  </motion.div>
);

export default SkillsPresenter;
