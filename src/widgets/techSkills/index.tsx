import React, { FC } from 'react';

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

import Title from '../../components/title';

interface ITechSkills {}
const TechSkills: FC<ITechSkills> = ({}: ITechSkills) => (
  <Container centerContent width={'100vw'} height={'100vh'}>
    <Card>
      <CardHeader>
        <Heading>Soft Skills</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={3}>
          <Box>
            <Title heading={'Programming Language'} tag={'h2'} />
            <Text>
              C(fine), C++(fine), Java(fine), Python(fluent), Js(fluent),
              Ts(fluent)
            </Text>
          </Box>
          <Box>
            <Title heading={'Web'} tag={'h2'} />
            <Text>
              React.js(familiar), Next.js(familiar), Express.js(unfamilar),
              Fastapi(unfamiliar), Django(unfamiliar), GraphQL(unfamiliar)
            </Text>
          </Box>
          <Box>
            <Title heading={'AI'} tag={'h2'} />
            <Text>
              Pytorch(fine), Scikit-learn(fine), Numpy(fine), Pandas(fine)
            </Text>
          </Box>
          <Box>
            <Title heading={'DB'} tag={'h2'} />
            <Text>
              MongoDB(familiar), MySQL(unfamiliar), SqLite(unfamiliar)
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  </Container>
);

export default TechSkills;
