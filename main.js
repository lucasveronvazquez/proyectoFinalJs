
let productosJSON=[];


const botonSwitch = document.querySelector('#switch');


botonSwitch.addEventListener('click', () => {
document.body.classList.toggle('dark');
botonSwitch.classList.toggle('active');


document.body.classList.contains('dark') ? localStorage.setItem('dark-mode', 'true' ) : localStorage.setItem('dark-mode', 'false' )
 
})

if (localStorage.getItem('dark-mode')=== 'true')  {

    document.body.classList.add('dark'); 
    botonSwitch.classList.add('active');
}else{ 
    document.body.classList.remove('dark');
    botonSwitch.classList.remove('active');
 };


function renderizarProductos(){

productosJSON.forEach(producto => {
      document.getElementById("cartas").innerHTML+=`
      <div class="card m-3 p-3" style= "width: 18rem;">
            <img class="card-img-top" src="${producto.foto}">
            <div class="card-body">
                  <h5>"${producto.nombre}"</h5>
                  <p>$${producto.precio}</p>
                  <p>ID : ${producto.id}</p>
                  <btn class="btn btn-primary">Agregar</btn>
                  <btn class="btn btn-secondary">Ver más</btn>
            </div>
            </div>
      `
})


}




async function obtenerJSON(){
    const URLJSON="productos.json";
    const resp = await fetch(URLJSON)
    const data = await resp.json()
    productosJSON=data;
    renderizarProductos();

   }


   obtenerJSON();
         //data.forEach(producto => {
           // document.getElementById("cartas").innerHTML+= `
            //<div class="card m-3 p-3" style= "width: 18rem;">
            //<img class="card-img-top" src="${producto.foto}">
            //<div class="card-body">
              //    <h5>"${producto.nombre}"</h5>
                //  <p>$${producto.precio}</p>
                  //<p>ID : ${producto.id}</p>
                  //<btn class="btn btn-primary">Agregar</btn>
                  //<btn class="btn btn-secondary">Ver más</btn>
            //</div>
            //</div>
            //`;
         //});
      //})

//}

//obtenerDatos();