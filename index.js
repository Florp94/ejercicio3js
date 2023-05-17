// 👉 Al apretar el botón , deberán capturar el valor ingresado en el input (Que será un número) mediante el evento "submit" si están usando un formulario o bien el evento "click" si quieren manejarlo desde el botón.

// 👉 Si el número ingresado en el input es valido(existe una pizza cuyo id coincida con el número ingresado en el input), se deberá renderizar en el contenedor una card con los datos de la pizza cuyo id coincida con el número ingresado en el input. La card deberá contener mínimamente el nombre, imagen y y precio de la pizza (Estilizarlo con CSS 🎨) 

// 🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
// 🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
// 🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto del contenido de nuestro contenedor se deberá pisar por lo nuevo.

// El input y el botón no se debén pisar, ya que debemos poder seguir haciendo busquedas.

// ¿Cuál es el desafío final?

// Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página. No guardar en el localstorage en caso de que lo buscado haya generado un error, solamente persistir los datos cuando se haya encontrado una pizza.
const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const inputcaja = document.querySelector(".input_caja");
const botoncaja = document.querySelector(".btn_caja");
const contenedorpizza = document.querySelector(".contenedor_caja");
const errorpizzas = document.querySelector(".errorpizza");

// const busquedaPizzas = pizzas.map((pizza) => {
//   return pizza.id;
// })

const loqueescriba = 4;



const busquedaPizzassome = pizzas.some((pizza) => {
    return loqueescriba === pizza.id;
})

console.log(busquedaPizzassome);

const busquedapizzas = (pizzas) => {
  return `
    <div class="contenedor_caja">
      <img class="imgpizza" src= ${pizzas.imagen} alt="foto de pizza seleccionada"> 
      <h4 class="h4pizza">${pizzas.nombre}</h4> 
      <p class="ingredientespizza"> ${pizzas.ingredientes} </p>
      <p class="preciopizza"> ${pizzas.precio} </p>
    </div>
  `;
};



// const init = () => {
//     form.addEventListener("submit", submitHandler);
//       renderItems();
// }

// init();

