import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
  Box
} from '@material-ui/core';
import StyledLink from './StyledLink';
import DescriptionIcon from '@material-ui/icons/Description';
import { STYLES } from '../../utils/constants';
import { HeaderDivider } from '../../utils/styledComponents';
import { ARTICLES } from './constants';

export const Articles = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(80);
  });

  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Box py={20}>
        <Box letterSpacing={15}>
          <Typography variant="h3" gutterBottom>
            <strong>ARTICLES</strong>
          </Typography>
        </Box>
        <HeaderDivider />
        <Box mb={5}>
          <Typography>
            Read some of the stuff I wrote.
        </Typography>
        </Box>
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
      </Box>
    </Container>
  );
};

Articles.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}