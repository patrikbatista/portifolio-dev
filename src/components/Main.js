import React from 'react';
import {
  Box,
  Typography,
  // Link,
  // SvgIcon,
} from '@mui/material';

import developerPhoto from '../images/fotoPatrik.jpeg';

require('@lottiefiles/lottie-player');

function Main() {
  return (
    <section>
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'rgba(255, 254, 255, 0.50)',
          borderRadius: '5px',
          boxShadow: '0 0 5px',
        } }
        mt={ 10 }
        mx={ 2 }
      >
        <Box
          sx={ { order: 1 } }
          maxWidth="sm"
        >
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            background="transparent"
            speed="1"
            style={ { width: '300px', height: '300px' } }
            loop
            autoplay
          />
        </Box>
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            order: 2,
          } }
          maxWidth="sm"
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
          >
            Patrik Batista
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            Full Stack Web Developer
          </Typography>
        </Box>
        <Box
          sx={ {
            order: 3,
          } }
          maxWidth="sm"
          mt={ 3 }
          mb={ 3 }
        >
          <img
            style={ {
              borderRadius: '8px',
              boxShadow: '0 2px 10px black',
            } }
            width="200px"
            alt="fotografia Patrik"
            src={ developerPhoto }
          />
        </Box>
      </Box>
    </section>
  );
}

export default Main;
