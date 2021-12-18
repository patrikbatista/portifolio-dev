import React from 'react';
import {
  Box,
  Typography,
  // Link,
  // SvgIcon,
} from '@mui/material';

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
      <Box
        sx={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.50)',
          textAlign: 'center',
          flexDirection: 'column',
          borderRadius: '2px',
          boxShadow: '0 0 5px',
        } }
        mt={ 10 }
        mx={ 2 }
        id="projetos"
        px={ 10 }
      >
        <Box
          py={ 5 }
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
      </Box>
      <div>
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
        >
          {projects.map((project, index) => (
            <div
              key={ index }
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
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
