import React from 'react';
import {
  Box,
  Typography,
  Tooltip,
} from '@mui/material';

import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import icons from '../icons/index';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const lint = true;

function About() {
  return (
    <section>
      <Box
        id="about"
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
        px={ 2 }
        pb={ 2 }
      >
        <Box
          py={ 5 }
        >
          <ThemeProvider theme={ theme }>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
            >
              Sobre mim
            </Typography>
          </ThemeProvider>
          <ThemeProvider theme={ theme }>
            <Typography variant="h6" gutterBottom component="div">
              Olá, me chamo Patrik Batista,
              tenho 38 anos, sou natural de Guarulhos no estado de SP.
              No ano passado(2020) ingressei no curso de Análise
              e Desenvolvimento de Sistemas na FATEC-SP,
              através desse curso descobri minha paixão por tecnologia,
              percebi a necessidade de acelerar meu desenvolvimento,
              foi aí que conhecia a
              {' '}
              { lint && <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a>}
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
          </ThemeProvider>
        </Box>
        <Box>
          <ThemeProvider theme={ theme }>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
            >
              Tecnologias
            </Typography>
          </ThemeProvider>
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
