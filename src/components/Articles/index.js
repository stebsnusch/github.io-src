import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Container,
} from '@material-ui/core';
import StyledLink from './StyledLink';
import DescriptionIcon from '@material-ui/icons/Description';
import { STYLES } from '../../utils/constants';
import { ARTICLES } from './constants';

export const Articles = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(80);
  });

  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Grid item>
        <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Articles</Typography>
        <Typography>Read some of the stuff I wrote.</Typography>
        <List>
          {ARTICLES.map((text, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>
                  <DescriptionIcon />
                </Avatar>
              </ListItemAvatar>
              <StyledLink
                href={text.url}
                target="_blank"
              >
                <ListItemText
                  primary={text.title}
                />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Container>
  );
};

Articles.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}