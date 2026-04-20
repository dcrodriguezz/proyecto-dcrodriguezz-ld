function renderizar (){
const galeria = document.getElementById("galeria");
galeria.innerHTML = "";

productos.forEach((producto) =>{
  const card = document.createElement("div")
  card.classList.add('card')
  card.innerHTML = `
  <div class = "card-body">
  <img src= "${producto.imagen}"
  <p class = "card-nombre">${producto.nombre}</p>
  <p class="card-descripcion">${producto.descripcion}</p>
  <p class="card-precio">valor: $${producto.precio.toLocaleString('es-CO')}</p>
  
  </div>
  
  `
  galeria.appendChild(card);
  
}
);
}
renderizar();
