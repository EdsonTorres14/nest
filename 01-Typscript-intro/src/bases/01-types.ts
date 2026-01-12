export let name: string = 'Edson';
export const age: number = 35;
export const isValid: boolean = true;


name = 'David';

export const templateString = ` Esto es un string 
nultilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros ${ age }
booleanos ${ isValid }
`
