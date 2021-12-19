import React from 'react';
import {
  Typography,
} from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import developerPhoto from '../images/fotoPatrik.jpeg';

require('@lottiefiles/lottie-player');

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Main() {
  return (
    <section>
      <div
        style={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'rgba(255, 254, 255, 0.50)',
          borderRadius: '5px',
          boxShadow: '0 0 5px',
          marginTop: '80px',
          marginRight: '16px',
          marginLeft: '16px',
          // flexGrow: 1,
        } }
        // mt={ 10 }
        // mx={ 2 }
      >
        <div
          style={ { width: '33%', display: 'flex', justifiyContent: 'center' } }

        >
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            background="transparent"
            speed="1"
            style={ { objectFit: 'contain' } }
            loop
            autoplay
          />
        </div>
        <div
          style={ {
            width: '33%',
            display: 'flex',
            flexDirection: 'column',
            justifiyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
          } }
        >
          <ThemeProvider theme={ theme }>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
            >
              Patrik Batista
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={ theme }>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
            >
              Full Stack Web Developer
            </Typography>
          </ThemeProvider>
        </div>
        <div
          style={ {
            width: '33%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '24px',
            marginBottom: '24px',
          } }
        >
          <img
            style={ {
              borderRadius: '8px',
              boxShadow: '0 2px 10px black',
              objectFit: 'contain',
              maxWidth: '80%',
              maxHeight: '80%',
            } }
            width="200px"
            alt="fotografia Patrik"
            src={ developerPhoto }
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
