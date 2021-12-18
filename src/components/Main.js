import React from 'react';
import { Box, Typography, Link, SvgIcon } from '@mui/material';

// import animacao from '../images/83087-developer-front-end.gif';
import Carousel from 'react-multi-carousel';
import GitHubIcon from '@mui/icons-material/GitHub';
import developerPhoto from '../images/fotoPatrik.jpeg';
import icons from '../icons/index';
import projects from '../projects';

require('@lottiefiles/lottie-player');
// import computerPhoto from '../images/computerPhoto.jpeg';
function Main() {
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
        id="sobremim"
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
            Sobre mim
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Olá, me chamo Patrik Batista,
            tenho 38 anos, sou natural de Guarulhos no estado de SP.
            No ano passado(2020) ingressei no curso de Análise
            e Desenvolvimento de Sistemas na FATEC-SP,
            através desse curso descobri minha paixão por tecnologia,
            percebi a necessidade de acelerar meu desenvolvimento,
            foi aí que conhecia a
            {' '}
            <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>
            ,
            uma escola de desenvolvimento Web focada no mercado de trabalho,
            o curso contém 1500hs de aula
            e nele tenho desenvolvido minhas Soft e Hard Skills.
            O curso é dividido em 4 módulos
            (Fundamentos, Front-End, Back-End e Ciência da Computação).
            Atualmente estou no módulo de Back-End,
            confesso que essa área me encanta
            e a tenho estudado com muito entusiasmo,
            inclusive outras linguagens que não estão no currículo do curso,
            como por exemplo a linguagem Java(estou apaixonado por ela).
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
          >
            Tecnologias
          </Typography>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: '100%',
            } }
          >
            {icons.map((icon, index) => (
              <Box
                key={ index }
                sx={ {
                  padding: '5px',
                  width: '50px',
                  height: '50px',
                } }
              >
                <img
                  style={ {
                    objectFit: 'contain',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  } }
                  src={ icon }
                  alt="tecnologia"
                  loading="lazy"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
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
        ;
      </div>
    </section>
  );
}

export default Main;
