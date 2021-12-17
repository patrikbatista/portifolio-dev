import recipes from './recipes-app.png';
import statefull from './statefull.png';
import trybetunes from './trybetunes.png';

const projects = [
  {
    image: statefull,
    name: 'Movie Cards State Full',
    url: 'https://patrikbatista.github.io/statefull/index.html',
    pull: 'https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/142',
    description: `Projeto de uma aplicação em React, 
    com formulário com estado controlado`,
  },

  {
    image: trybetunes,
    name: 'Trybe Tunes',
    url: 'https://patrikbatista.github.io/trybetunes/#index',
    pull: 'https://github.com/tryber/sd-014-a-project-trybetunes/pull/125',
    description: `Aplicação em React que consome a API do iTunes, 
    trabalha com React Router, 
    componentes de classe com estado controlado e contém ciclo de vida`,
  },

  {
    image: recipes,
    name: 'Recipes App',
    url: 'https://patrikbatista.github.io/recipes-app/#index.html',
    pull: 'https://github.com/tryber/sd-014-a-project-recipes-app/pull/65',
    description: `Projeto final para conclusão do módulo de front-end, 
    realizado em grupo, aplicação em React com componentes funcionais, 
    com uso do Context Api, estado global gerenciado por Redux e com React Router, 
    testes automatizados com Jest/React Testing Library`,
  },
];

export default projects;
