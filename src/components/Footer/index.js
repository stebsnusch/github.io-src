import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Link,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { SOCIAL_MEDIA } from './constants';

export const Footer = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(100)
  });

  return (
    <Container component="footer">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="stretch"
        alignContent="center"
        textAlign="center"
        style={STYLES.WHITE_TEXT}
        py={10}
      >
        <Box letterSpacing={15}>
          <Typography variant="h3" color="primary" gutterBottom>
            <strong>contact me.</strong>
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography align="center" paragraph>
            Grab your cup of tea and let's have a chat! Just email <Link href="mailto:contact@stebs.dev">contact@stebs.dev</Link> and we can set up a meeting.
        </Typography>
          <Typography align="center">
            You can also find me on social media:
        </Typography>
        </Box>
        <Grid justify="center" spacing={1} container>
          {SOCIAL_MEDIA.map((item, index) => (
            <Grid key={index} item>
              <Button
                href={item.url}
                variant="outlined"
                color="primary"
                target="_blank"
                disableElevation
              >
                {item.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box pt={4}>
          <Typography>Thanks for coming <span role="img" aria-labelledby="love">❤️</span></Typography>
        </Box>
      </Box>
    </Container>
  );
};

Footer.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}