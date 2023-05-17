import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

interface ISimpleCard {
  headerText: string;
  bodyImg: string;
  altText: string;
  footerText: string;
}

function SimpleCardPresenter({
  headerText,
  bodyImg,
  altText,
  footerText,
}: ISimpleCard) {
  return (
    <Card
      variant="outline"
      width={['sm', 'md', 'lg', 'xl', '2xl']}
      height="100%"
    >
      <CardHeader>
        <Heading as="h2" fontSize="xl">
          {headerText}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image
          src={bodyImg}
          alt={altText}
          borderRadius="lg"
          boxSize={['sm', 'md', 'lg', 'xl', '2xl']}
        />
      </CardBody>
      <CardFooter>
        <Text verticalAlign="top" as="em" fontSize="md">
          {footerText}
        </Text>
      </CardFooter>
    </Card>
  );
}

export default SimpleCardPresenter;
