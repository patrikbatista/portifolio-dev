import React from 'react';
import {
  Box,
  Typography,
  Link,
  SvgIcon,
  Tooltip,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import WebIcon from '@mui/icons-material/Web';

import Carousel from 'react-multi-carousel';

import projects from '../projects';

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
          margin: '80px 16px 0px',
          padding: '0px 80px',
        } }
        id="projetos"
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
          <Typography
            variant="h3"
            gutterBottom
            component="div"
          >
            Projetos
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            coisas do projeto
          </Typography>

        </Box>

        <Carousel
          swipeable
          draggable
          showDots
          responsive={ responsive }
          ssr // means to render carousel on server-side.
          infinite
          // autoPlay
          // autoPlaySpeed={ 1000 }
          keyBoardControl
          customTransition="all .5"
          transitionDuration={ 500 }
          containerClass="carousel-container"
          removeArrowOnDeviceType={ ['tablet', 'mobile'] }
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          focusOnSelect
          // renderDotsOutside
        >
          {projects.map((project, index) => (
            <div
              key={ index }
              style={ { height: '500px' } }
            >
              <Typography variant="h4" gutterBottom component="div">
                {project.name}
              </Typography>
              <div
                style={ { height: '300px' } }
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
              <Typography mt={ 2 } variant="body1" gutterBottom component="div">
                {project.description}
              </Typography>
              <div>
                <Tooltip title="Pull Request">
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
