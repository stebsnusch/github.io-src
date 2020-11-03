import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { HeaderDivider } from '../../utils/styledComponents';
import { MENU_ITEMS } from './constants';

export const Header = () => (
  <Container>
    <Box py={8} height="100%" style={STYLES.FULLHEIGHT} display="flex" alignItems="center">
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h1" align="left">
            <Box letterSpacing={15} fontWeight="600">
              Stephany Nusch
          </Box>
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary" style={STYLES.SUBTITLE}>
            <Box letterSpacing={15}>
              <strong>software engineer.</strong>
            </Box>
          </Typography>
          <HeaderDivider />
        </Grid>
        <Grid alignItems="right" justify="right" alignContent="right" xs={4} item>
          <List>
            {MENU_ITEMS.map((link, index) => (
              <ListItem key={index}>
                <Link href={link.url} style={STYLES.FULLWIDTH}>
                  <Typography align="right" style={STYLES.MENU}>{link.title}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

