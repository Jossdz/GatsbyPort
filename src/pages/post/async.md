---
  path: "/post"
  date: "2018-10-21"
  title: "Camino para conocer la programación asíncrona en javaScript"
  tags: ["js","nodejs"]
  excerpt: "En mi historia como programador había visto la asincronía de Javascript como algo que tenía que usar y me limitaba a entender que las callbacks devolvían algo sin saber cómo."
---

En mi historia como programador había visto la asincronía de Javascript como algo que tenía que usar y me limitaba a entender que las callbacks devolvían algo sin saber cómo; pero al entender cómo y el por qué, me ha hecho comprender programación más avanzada y me siento con la obligación de compartir esto a la comunidad.

## Callbacks

Para entender las callbacks necesitamos saber: ¿que son?

Yo las describo como funciones que se pasan como argumento a otra función, la función callback se ejecuta cuando la función principal termina. Normalmente hacemos uso de los valores que resultan de la función principal. Esto significa que tendremos lógica la cuál genera un **valor**, que es usado dentro de la función **callback**.

<img class='side' src='https://cdn-images-1.medium.com/max/1200/1*Lhm423H018XzY9VIZcpXWw.png' width='400'/>

El código a la izquierda ejemplifica la definición, donde tenemos una función principal llamada saludar, quien recibe dos propiedades, la primera es un nombre y la segunda nuestra función callback. La función principal tiene la facultad de generar un saludo en base a un nombre, una vez generado el saludo el callback se va a ejecutar. Cuando llamamos la función se genera el saludo y ahora definimos lo que queremos hacer con el, la función del callback mostrará el saludo en consola.

De esta manera es como el callback se ejecuta, esperando el valor devuelto por la función principal y por ello se le conoce como callback.

Esto está bien, pero todo desarrollador llega a conocer y odiar algo llamado ‘Callback hell’ algo como esto:

```javascript
  function comprarTaquito(taquitosActuales, callback){
    const taquitos = taquitosActuales + 1
    callback(taquitos)
  }
  function comprarTresTaquitos(taquitosActuales, callback){
    const taquitos = taquitosActuales + 3
    callback(taquitos)
  }
  function comprarCincoTaquitos(taquitosActuales, callback){
    const taquitos = taquitosActuales + 5
    callback(taquitos)
  }

  // no tengo taquitos :(
  let tacos = 0

  //compro 1 taco
  comprarTaquito(tacos, function(primeraCompra){
    console.log('taquitos: ' + primeraCompra)
      //una vez compre mi primer taco, compro 3 más !
      comprarTresTaquitos(primeraCompra, function(segundaCompra){
        console.log('taquitos: ' + segundaCompra)
          //una vez compre mi primer taco y 3 más, compro 5 extra :o
          comprarCincoTaquitos(segundaCompra, function(tercerCompra){
            console.log('taquitos: '+ tercerCompra)
      })
    })
  })
```

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

Está bien si no comprendes el código a la primera, te explico.

Existen 3 funciones que ejecutan un callback, esto después de actualizar mi cantidad de 🌮’s, la cual es 0 en un principio. Después de comprar el primer taco, es como puedo comprar más, no antes. Ahora imagina que después de esas 3 veces que compré tacos, quiero 10 más (uno por uno)…

Bienvenido al Callback hell.

## Esto se pone mejor… lo prometo!
La manera de escapar de los callbacks es una solución implementada en ES6 llamada Promesas. Una promesa es un objeto que intentará resolver alguna o varias operaciones y puede tener éxito o no, esto determina si se resuelve o hay algún error. Una promesa se ve de la siguiente manera:

```javascript
  var promise = new Promise(function(resolve, reject) {
    // codigo
    if (/*si todo sale bien*/) {
      resolve("Promesa resuelta");
    }
    else {
      reject(Error("Algo salió mal"));
    }
  });
```

Veamos como luce el ejemplo de los 🌮’s remplazando los callbacks por promesas:


El ejercicio luce igual o más enredoso y aun que no lo parezca esto es un gran paso adelante en la programación asíncrona con javascript. Ahora tenemos una palabra clave then que recibe un callback(😩) el cual recibe el resultado de la promesa como primer argumento, esto aclara el código y no tenemos lógica confusa en tantos callbacks.

En un caso más real es cuando las promesas tienen un impacto y aclaran el código, añadiendo incluso una mejor forma de manejar los errores con el método catch de las promesas.

Esto en nuestro ejercicio cambia la manera en que añadimos 🌮’s, ahora podemos ejecutar cada función hasta que la anterior sea completada, compramos un taquito… una vez comprado entonces compramos 3… ¿listo?, entonces compra otros 5. La promesa nos devuelve el nuevo valor en cada ejecución y es así como logramos el mismo objetivo con promesas.

Hay mucha diferencia entre callback y promesas, pero aun tenemos un código confuso, con callbacks y muy poco legible.

¡Esperaste mucho para la solución real!
Echa un vistazo a la manera definitiva que ofrece node desde la versión 8 y babel.


Hay un par de elementos nuevos a notar, uno de ellos es la función asíncrona; ese keyword async se asigna a la función que maneja esas llamadas asíncronas (o la función que contenga los then), ese es el primer paso.


Para reciclar nuestro then es importante notar que cada respuesta de la promesa tiene un nombre en el argumento del callback, utilizaremos ese nombre para generar una variable la cual va a esperar que ese código devuelva un valor y generará una ‘pausa’ gracias al keyword await hasta que esa promesa se resuelva y genere dicho valor.

En resumen:

Tenemos que englobar a la función que realiza las llamadas asíncronas con el keyword async.
Por cada then ocupar la formula descrita anteriormente y utilizar el argumento del callback para generar una variable.
Igualar esa variable a la promesa anteponiendo la palabra await que pondrá el código en pausa hasta que esa variable contenga un valor que podamos usar en el resto del código.
Por ultimo, remover el ‘.then()’.

Como resultado tenemos un código mucho más legible y claro en una manera que nos ayuda a entenderlo como lo que es, código por el cual hay que detener un poco la ejecución esperando un valor para poder continuar.

Y si agregamos un poco más de javaScript moderno tenemos el mismo resultado con la mitad de líneas y un código que se entiende sin tanto esfuerzo.


Esto parece más un código javascript síncrono mismo que al no tener callbacks y arrow functions para resolverse; nos hace más fácil el manejo de errores con try/catch e incluso podemos poner breakpoints para debugear de manera tradicional.

Estoy seguro de que si la programación asíncrona era una caja negra para ti como lo fue al principio para mí… ahora será un aliado en tu día a día como desarrollador.


