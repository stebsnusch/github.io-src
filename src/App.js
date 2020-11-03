import React, { useState } from 'react';

import LoadingBar from 'react-top-loading-bar';
import TrackVisibility from 'react-on-screen';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { STYLES } from './utils/constants';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0abde3',
      }
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 18
    }
  });
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingBar
          color={theme.palette.primary.main}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Header />
        <Grid direction="column" container>
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <TrackVisibility>
              <Container maxWidth="lg">
                <About setProgress={setProgress} />
              </Container>
            </TrackVisibility>
          </Grid>
          <Grid xs={12} item>
            <TrackVisibility>
              <Experience setProgress={setProgress} />
            </TrackVisibility>
          </Grid>
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <TrackVisibility>
              <Projects setProgress={setProgress} />
            </TrackVisibility>
          </Grid>
          <Grid xs={12} item>
            <TrackVisibility>
              <Articles setProgress={setProgress} />
            </TrackVisibility>
          </Grid>
          <Grid xs={12} item>
            <TrackVisibility>
              <Contact setProgress={setProgress} />
            </TrackVisibility>
          </Grid>
          <Grid xs={12} item>
            <Divider />
          </Grid>
          <Grid xs={12} item>
            <Container>
              <Box mb={3}>
                <Typography color="textSecondary" align="center">Made with ♥ by <Link href="https://github.com/stebsnusch">stebsnusch</Link></Typography>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
