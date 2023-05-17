import { motion } from 'framer-motion';
import React from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import eloImg from '../../assets/outoftheblue.png';
import titanicImg from '../../assets/titanic.png';
import SimplecardContainer from '../../components/simplecard';

function PersonalInterestsPresenter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: false }}
    >
      <Card>
        <CardHeader textAlign="center">
          <Heading fontSize="2xl" padding={5}>
            My Personal Interests
          </Heading>
        </CardHeader>
        <CardBody>
          <Wrap spacing={5} alignItems="center" justify="center">
            <WrapItem>
              <SimplecardContainer
                headerText="Watching Movies"
                bodyImg={titanicImg}
                altText="Titanic"
                footerText={
                  "I'd like to watch movies! From the old one to the latest!"
                }
              />
            </WrapItem>
            <WrapItem>
              <SimplecardContainer
                headerText="Listening to Musics"
                bodyImg={eloImg}
                altText="Out of the Blue"
                footerText={"I'd love to listen musics! Across all genres."}
              />
            </WrapItem>
          </Wrap>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default PersonalInterestsPresenter;
