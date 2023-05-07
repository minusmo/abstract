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
} from '@chakra-ui/react';
import Title from '../../components/title';

interface ISoftSkills {
  softSkills: string[];
}
const SoftSkills: FC<ISoftSkills> = ({ softSkills }: ISoftSkills) => (
  <Container>
    <Card>
      <CardHeader>
        <Heading>Soft Skills</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={3}>
          {softSkills.map((softSkill) => (
            <Box>
              <Title heading={softSkill} tag={'h4'} />
            </Box>
          ))}
        </Stack>
      </CardBody>
    </Card>
  </Container>
);

export default SoftSkills;
