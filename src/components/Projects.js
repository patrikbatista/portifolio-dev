import React from 'react';
import {
  Box,
  Typography,
  Link,
  SvgIcon,
  Tooltip,
} from '@mui/material';

import Carousel from 'react-multi-carousel';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

import projects from '../projects';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section>
      <div
        style={ {
          backgroundColor: 'rgba(255, 255, 255, 0.50)',
          textAlign: 'center',
          borderRadius: '2px',
          boxShadow: '0 0 5px',
          margin: '80px 16px 80px',
          padding: '0px 40px 20px',
        } }
        id="projects"
      >
        <Box
          py={ 5 }
          sx={ {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          } }
        >
          <ThemeProvider theme={ theme }>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
            >
              Projetos
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={ theme }>
            <Typography variant="h6" gutterBottom component="div">
              coisas do projeto
            </Typography>
          </ThemeProvider>

        </Box>

        <Carousel
          swipeable
          draggable
          showDots
          responsive={ responsive }
          ssr // means to render carousel on server-side.
          infinite
          // autoPlay
          // autoPlaySpeed={ 2000 }
          keyBoardControl
          customTransition="all .5"
          transitionDuration={ 500 }
          containerClass="carousel-container"
          removeArrowOnDeviceType={ ['tablet', 'mobile'] }
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect
        >
          {projects.map((project, index) => (
            <div
              key={ index }
              // style={ { height: '500px' } }
            >
              <ThemeProvider theme={ theme }>
                <Typography variant="h4" gutterBottom component="div">
                  {project.name}
                </Typography>
              </ThemeProvider>
              <div
                style={ { masxHeight: '300px' } }
              >
                <img
                  src={ project.image }
                  style={ {
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  } }
                  alt={ project.name }
                />
              </div>
              <ThemeProvider theme={ theme }>
                <Typography mt={ 2 } variant="body1" gutterBottom component="div">
                  {project.description}
                </Typography>
              </ThemeProvider>
              <div
                sytle={ { marginBottom: '10px' } }
              >
                <Tooltip title="Veja meu Pull Request">
                  <Link
                    href={ project.pull }
                    underline="none"
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SvgIcon fontSize="large" component={ GitHubIcon } />
                  </Link>
                </Tooltip>
                { ' '}
                <Tooltip title="Veja o site">
                  <Link
                    href={ project.url }
                    underline="none"
                    color="inherit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SvgIcon fontSize="large" component={ WebIcon } />
                  </Link>
                </Tooltip>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
