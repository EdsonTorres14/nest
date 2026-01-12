import { name } from './bases/01-types';

import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hola ${name}!!! </h1>
`;