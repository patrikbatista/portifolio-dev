import React from 'react';
import {
  Box,
  Typography,
  Tooltip,
  // Link,
  // SvgIcon
} from '@mui/material';

import icons from '../icons/index';

require('@lottiefiles/lottie-player');

function About() {
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
            {icons.map(([icon, description], index) => (
              <Box
                key={ index }
                sx={ {
                  padding: '5px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                } }
              >
                <Tooltip title={ description }>
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
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default About;
