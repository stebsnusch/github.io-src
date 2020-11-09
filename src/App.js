import React, { useState } from 'react';

import LoadingBar from 'react-top-loading-bar';
import TrackVisibility from 'react-on-screen';

import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { STYLES } from './utils/constants';
import { NavigationBar } from './components/NavigationBar';

function App() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#E56B70',
      },
      secondary: {
        main: '#ED979A',
      }
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
    }
  });

  theme = responsiveFontSizes(theme);

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
        <NavigationBar />
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
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <TrackVisibility>
              <Footer setProgress={setProgress} />
            </TrackVisibility>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
