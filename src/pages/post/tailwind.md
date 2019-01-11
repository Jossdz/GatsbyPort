---
  path: "/post"
  date: "2018-04-03"
  title: "Componentes de IU con React + Tailwind"
  medium: "https://medium.com/@jossdz/componentes-de-iu-con-react-tailwind-46401f0c3336"
  tags: ["js", "react", "nodejs", "css"]
  excerpt: "Componentes para interfaz de usuario de React usando Tailwind + PostCss."
---

El desarrollo web front end moderno hasta ahora ha tratado de ayudarnos a desarrollar nuestras aplicaciones en módulos que trabajan en conjunto, todo el esfuerzo por separar la lógica de cada elemento de la aplicación ha dado frutos importantes y hoy tenemos frameworks completos que nos ayudan a desarrollar de esta manera y manejan a la perfección lógica y vistas para nuestras apps.

React es uno de los frameworks Front end del momento y su función básica según Facebook es:

> A JavaScript library for building user interfaces.

React es una librería de JavaScript para construir interfaces de usuario.
Esto es muy cierto, React nació para crear interfaces de usuario, resuelve perfecto la lógica y la vista pero… hay varias maneras de resolver los estilos, una manera interesante es haciendo uso de un framework; El problema de estos frameworks es que tienen en su mayoría estilos predefinidos (UI Kit)y hacen que muchos sitios se vean idénticos.

<img class='side' src='https://cdn-images-1.medium.com/max/1200/1*xAR13OS8OHLlMbRTYQ3a2g.jpeg' alt='tailwind_logo'/>

La solución a esto es un Framework llamado Tailwind, Tailwind es un Framework de css orientado a la utilidad para construir interfaces de usuario personalizadas. Lo que quieren dar a entender sus creadores es que es un framework que consiste en clases de utilidad que nos permiten dar estilos a nuestra aplicación escribiéndolos directamente en el html(o jsx) y no es un UI Kit.

Tailwind es en teoría un framework declarativo de estilos, si necesitas un texto color azul simplemente colocas la clase de ayuda `text-blue` en el elemento. Esto hace el framework con todas las propiedades de los elementos, incluyendo clases para diseño responsive, hovers, elementos activos, entre otras. Teniendo esto en cuenta podemos inferir que tailwind tiene la facultad de complementar el diseño de nuestros componentes de IU con React, el cual también es un framework declarativo.

## Iniciando un proyecto create-react-app + Tailwind

Iniamos un proyecto con create react app:

```bash
# 1 Si no tienes instalado el cli
  npm i -g create-react-app (solo si no tienes instalado create-react-app global)
# 2
  create-react-app tailreact
# 3
  cd tailreact
```

Con esto ejecutado tendremos listo un proyecto entero con react, es hora de instalar lo necesario para lograr hacer uso de Tailwind e integrarlo a CRA.

```bash
npm i — save-dev tailwindcss autoprefixer postcss-cli
```

Ahora creamos la configuración inicial de tailwind con el siguiente comando:

```bash
node_modules/.bin/tailwind init tailwind.config.js
```

Como pudiste notar, instalamos un par de dependencias extras con tailwind, una de ellas es postCSS y nos ayudará a llevar la configuración de tailwind a css común y corriente. Así que creamos el archivo postcss.config.js en la raíz del proyecto y pegamos la siguiente configuración:

```js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
};
```

Ya estamos casi listos, ahora hay que crear un archivo de entrada de css, para ello creamos el archivo `src/styles/index.css`
Dentro de este archivo necesitamos la configuración básica de tailwind dentro de el, la cual es:

```css
@tailwind preflight;
@tailwind utilities;
```

Para que todo esto funcione en conjunto y podamos empezar a codear y dar estilo, necesitamos configurar las ejecuciones en nuestro package.json

```json
"scripts": {
        "b:css": "postcss src/styles/index.css -o src/index.css",
        "w:css": "postcss src/styles/index.css -o src/index.css -w",
        "start": "npm run w:css & react-scripts start",
        "build": "npm run b:ss && react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    }
```

Eso son todos los pasos necesarios para la configuración, ahora estamos listos para ejecutar y comenzar a crear nuestros componentes estilizados con:

```bash
npm start
```

## Usando Tailwind

<iframe src="https://codesandbox.io/embed/94m7j785xy" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Espero hayas leido con atención el código, te darás cuenta que las clases son muy descriptivas:

* flex = le da la propiedad display flex.
* justify-center = justifica en el centro el texto.
* font-sans = le da propiedad sans-serif al texto.
* border-black = le da un borde negro
* entre otras…

Algunas de ellas tienen medidas o colores, estos valores están declarados en el archivo `tailwind.config.js` y puedes personalizarlos totalmente, pero por defecto tienen las medidas:

* auto: auto
* px: 1px
* 0: 0
* 1: 0.25rem
* 2: 0.5rem
* 3: 0.75rem
* 4: 1rem
* 6: 1.5rem
* 8: 2rem

## Componentes de IU Re-utilizables Usando metodología BEM(Bloque, elemento, modificador)

Creamos un componente `components/Tailcard.js` y creamos una card con el siguiente código:

```jsx
import React from 'react';

export default ({title, body, image}) => {
  return(
    <div className="
      shadow-md 
      rounded 
      overflow-hidden 
      max-w-cd  
      mb-3
      sm:flex
      ">
          <div style={{ backgroundImage: `url(${image})`}}
          className="
          bg-cover 
          bg-center 
          h-48 
          w-auto
          sm:h-auto
          sm:w-64"
          >
          </div>
          <div className="p-4">
            <h2 className="
            font-black 
            mb-3 
            text-left"> {title} </h2>
            <p className="
            text-sm 
            text-grey-dark 
            mb-4 
            text-justify"> {body}
            </p>
          <button className="
            bg-teal 
            text-white 
            py-3 
            px-6 
            font-bold 
            rounded-full 
            mt-1 
            mb-2
            hover:bg-teal-light">More</button>
          </div>
        </div>
  )
}
```

Tailwind hasta este punto parece muy útil y práctico pero, ¿Que pasa si necesito 7, 10 0 15 clases en un elemento?; Obtenemos un formato complejo y difícilmente legible para esto, para eso utilizamos la regla de `@apply` y agrupamos los estilos en una propiedad genérica y reutilizable dentro de nuestro archivo `src/styles/index.css`:

```css
@tailwind preflight;
.card{
@apply .shadow-md .rounded .overflow-hidden .max-w-md  .mb-3
}
.card__image{
@apply .bg-cover .bg-center .h-48 .w-auto
}
.card__title{
@apply .font-black .mb-3 .text-left
}
.card__button{
@apply .bg-teal .text-white .py-3 .px-6 .font-bold .rounded-full .mt-1 .mb-2
}
.card__button:hover{
@apply .bg-teal-light
}
.card__body{
@apply .text-sm .text-grey-dark .mb-4 .text-justify
}
@tailwind utilities;
```

Ahora simplemente colocamos las clases que engloban el estilo y comportamiento y obtenemos un componente más limpio y con estilos personalizados.

```jsx
import React from 'react';

export default ({title, body, image}) => {
  return(
    <div className="
      card
      sm:flex
      ">
          <div style={{ backgroundImage: `url(${image})`}}
          className="card__image sm:h-auto sm:w-64"
          >
          </div>
          <div className="p-4">
            <h2 className="card__title"> {title} </h2>
            <p className="card__body"> {body}
            </p>
          <button className="card__button">More</button>
          </div>
        </div>
  )
}
```

Ahora solo queda utilizar tantos TailCard como los necesites y continuar creando más componentes re utilizables y legibles, creados con metodología BEM para lograr algo increíble y sintetizado.

![demo](https://cdn-images-1.medium.com/max/1600/1*y5ryCCVXnK3LjBcqw8Zz7A.png)


## Código del ejemplo

### [Github](https://github.com/Jossdz/tailwind-react)

### ¿Que sigue?

Podemos continuar leyendo la documentación de Tailwind y hacer uso de algunos plugins de Postcss ya que lo tenemos configurado para el proyecto.

### Links:

* [Tailwind](https://tailwindcss.com/)
* [React](https://reactjs.org/)
* [Tailwind components](https://tailwindcomponents.com/)
* [BEM css](http://soyfrontend.com/bem-metodologia-modular-css/)