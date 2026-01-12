// import { name } from './bases/01-types';
// import { bulbasaur } from './bases/02-objects';
// import { charmander } from './bases/03-clases';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators2';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hola ${charmander.name}!!! </h1>
`;