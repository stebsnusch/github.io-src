import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { HeaderDivider } from '../../utils/styledComponents';

export const Header = () => (
  <Container>
    <Box py={8} height="100%" style={STYLES.FULLHEIGHT} display="flex" alignItems="center">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography variant="h1" align="left">
            <Box letterSpacing={15} fontWeight="600">
              Stephany Nusch
          </Box>
          </Typography>
          <Typography variant="h3" align="left" color="textSecondary">
            <Box letterSpacing={15}>
              <strong>software engineer.</strong>
            </Box>
          </Typography>
          <HeaderDivider />
        </Grid>
        <Grid item>
          <img src={require('../../assets/profile_pic.jpeg')} alt="girl smiling" width="350px" />
        </Grid>
      </Grid>
    </Box>
  </Container>
);

