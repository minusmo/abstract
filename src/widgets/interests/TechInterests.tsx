import { motion } from 'framer-motion';
import React from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Highlight,
  HighlightProps,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function Tag(tagProps: HighlightProps) {
  return <Highlight {...tagProps} />;
}
function TechInterests() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <Card variant="outline" padding={5}>
        <CardHeader>
          <Heading fontSize="lg">My Technical Interests</Heading>
        </CardHeader>
        <CardBody>
          <Wrap>
            <WrapItem>
              <Tag
                query="Computer Graphics"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  fontWeight: 600,
                  boxShadow: 'md',
                  bg: 'teal.100',
                }}
              >
                Computer Graphics
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                query="Neural Network"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'red.200',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
              >
                Neural Network
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                query="Resilent Services"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'yellow.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
              >
                Resilent Services
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                query="Algorithmic Solutions"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'green.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
              >
                Algorithmic Solutions
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag
                query="Distributed System"
                styles={{
                  px: '2',
                  py: '2',
                  rounded: 'full',
                  bg: 'blue.300',
                  fontWeight: 600,
                  boxShadow: 'md',
                }}
              >
                Distributed System
              </Tag>
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default TechInterests;
