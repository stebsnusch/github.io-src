import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
  Box,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { PROJECTS } from './constants';
import { cardStyles } from './styles';

export const Projects = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(80);
  });

  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Box letterSpacing={15} my={10}>
        <Typography variant="h4" color="primary" gutterBottom>
          <strong>projects.</strong>
        </Typography>
     </Box>
     <Typography style={STYLES.WHITE_TEXT}>This is my personal playground.</Typography>
      <Grid container spacing={2}>
        {PROJECTS.map((project, index) => (
          <Grid xs={4} item key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  style={cardStyles.media}
                  height="140px"
                  image={require(`../../assets/${project.thumb}`)}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.url} size="small" color="primary">
                  VISIT
        </Button>
                <Button size="small" href={project.repo} color="primary">
                  SOURCE CODE
        </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Projects.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}