import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  Grid
} from '@material-ui/core';

import { Skills } from '../Skills';
import { STYLES } from '../../utils/constants';

export const About = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(20);
  });

  return (
    <Box
      style={STYLES.FULLHEIGHT}
      display="flex"
      alignItems="center"
      pb={5}
    >
      <Box>
        <Box style={STYLES.WHITE_TEXT}>
          <Box letterSpacing={15} my={5}>
            <Typography variant="h3" color="primary" gutterBottom>
              <strong>about.</strong>
            </Typography>
          </Box>
          <Typography fontWeight="300" align="justify" variant="body1" paragraph>
            Hello, there. My name is Stephany (she/her) and I am a Brazilian Software Engineer, more specifically located in the city of São Paulo.
            I graduated in the first semester of 2016 at FATEC Rubens Lara and have been collecting professional experience since then.
              </Typography>

          <Typography align="justify" variant="body1" paragraph>
            I am passionate about coding and am always studying in order to learn something new and find ways to improve my skills.
            My goal is to broaden my possibilities as a professional and to challenge myself into looking for the smartest solutions.
            I just love learning and am widely open to every opportunity to evolve both technically and personally.
              </Typography>

          <Typography align="justify" variant="body1">
            Diversity and inclusion are topics that hold my interest and I value initiatives with the goal to decrease the current inequality in tech.
              </Typography>

          <Box letterSpacing={15} my={5}>
            <Typography variant="h3" color="primary" gutterBottom>
              <strong>skills.</strong>
            </Typography>
          </Box>
          <Grid spacing={2} justify="space-between" container>
            <Skills />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

About.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}