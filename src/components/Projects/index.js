import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Button,
  Container,
  Box,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { PROJECTS } from './constants';
import { renderProjects } from './functions';

export const Projects = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(80);
  });

  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Box py={20}>
        <Box pb={5} letterSpacing={15}>
          <Typography variant="h3" color="primary" gutterBottom>
            <strong>projects.</strong>
          </Typography>
        </Box>
        <Box style={STYLES.WHITE_TEXT} mb={5}>
          <Typography>
            My personal playground. These are some projects I did to practice technologies I'm curious about and also reinforce Computer Science concepts.
        </Typography>
        </Box>
        <Grid
          style={STYLES.OVERFLOW_HIDDEN}
          justify="center"
          alignItems="center"
          alignContent="center"
          spacing={5}
          container>
          {PROJECTS.map(renderProjects)}
          <Grid sm={4} xs={12} item>
            <Button color="primary" variant="outlined">
              See more
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Projects.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}