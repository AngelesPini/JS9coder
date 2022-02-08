let miMesa = [];

const contenedorProductos = document.getElementById('contenedor-platos');
const contenedorMesa = document.getElementById('mesa-servida');

const cantidadPlatos = document.getElementById("contador-platos");
const selectPlatos = document.getElementById('selecPlatos');

const total = document.getElementById("precio-total");

selectPlatos.addEventListener('change' , ()=>{
    alert(selectPlatos.value)
    if(selectPlatos.value == 'all'){
        mostrarPlatos(stockPlatos)
    }else{
        mostrarPlatos(stockPlatos.filter(el => el.tipo == selectPlatos.value))
    }
})


mostrarPlatos(stockPlatos);


function mostrarPlatos(array){
    contenedorProductos.innerHTML= "";

array.forEach(plato =>{
    let div = document.createElement("div")
    div.className = "plato"
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${plato.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${plato.nombre}</h5>
    <p class="card-text">${plato.tipo}</p>
    <p>Salsa:  ${plato.salsa}</p>
    <p>$ ${plato.precio}</p>
    <a href="#" class="btn btn-primary">Agregar a mi mesa</a>
  </div>
</div>
    `

    contenedorProductos.appendChild(div);

    // let agregar = document.getElementById(`btn${plato.id}`)
    // agregar.addEventListener("click",()=>{
    //     agregarAmiMesa(plato.id)
    // })
})

}


 /* todo lo comentado se dio en afterclass y no llegué a terminarlo */


// function agregarAmiMesa(id) {
//     let comida = miMesa.find(item => item.id == id)
//     if(comida){
//         console.log(comida);
//         comida.cantidad = comida.cantidad + 1
//         document.getElementById(`cantidad${comida.id}`).innerHTML = `<p id= cantidad${comida.id}>Cantidad de platos:${comida.cantidad}</p>`
//         actualizarMiMesa()
//     }else{
//         let agregarPlato = stockPlatos.find(elemento => elemento.id == id)
//         miMesa.push(agregarPlato)
//         actualizarMiMesa()
//         let div = document.createElement("div")
//         div.className = "platoEnMesa"
//         div.innerHTML= `
//         <p>${agregarPlato.nombre}</p>
//         <p>Precio: $${agregarPlato.precio}</p>
//         <p id= cantidad${agregarPlato.id}>Cantidad:${agregarPlato.cantidad}</p>
//         <button id=botonEliminar${agregarPlato.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//         `
//         contenedorMesa.appendChild(div)
//         let eliminar = document.getElementById(`btn${agregarPlato.id}`)
//         eliminar.addEventListener("click" , ()=>{
//             console.log(agregarPlato.id);
//             eliminar.parentElement.remove()
//             miMesa = miMesa.filter(elemento => elemento.id != agregarPlato.id)
//             actualizarMiMesa()
//             localStorage.setItem("mesa", JSON.stringify(miMesa))
//         })
//     }
//     localStorage.setItem("mesa" , JSON.stringify(miMesa))
// }

// function actualizarMiMesa () {
//     cantidadPlatos.innerText = miMesa.reduce((acc,el)=> acc + el.cantidad , 0)
//     total.innerText = miMesa.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)

// }
