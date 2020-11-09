import React from 'react';

import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Chip
} from '@material-ui/core';
import { cardStyles } from './styles';


export const renderProjects = (project, index) => (
  <Grid sm={4} xs={12} item key={index}>
    <Card style={cardStyles.root}>
      <div style={cardStyles.details}>
        <CardContent style={cardStyles.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {project.description}
          </Typography>
          <Grid spacing={1} container>
            {project.tech.map((tech, index) => (
              <Grid key={index} item>
                <Chip label={tech} size="small" color="secondary" variant="outlined" />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </div>
      <Divider />
      <CardActions>
        <Button
          href={project.url}
          size="small"
          variant="contained"
          color="primary"
          disableElevation
        >
          VISIT
                      </Button>
        <Button
          size="small"
          href={project.repo}
          color="primary"
          variant="outlined"
        >
          SOURCE CODE
                      </Button>
      </CardActions>
    </Card>
  </Grid>
);
