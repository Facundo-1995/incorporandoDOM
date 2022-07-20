var articulo = [];

function agregar() {
   var textoDOM = document.getElementById("texto1").value;
   articulo[articulo.length] = textoDOM;
   document.getElementById("texto1").value="";
}

function mostrar() {
   for (let index = 0; index < articulo.length; index++) {
      console.log(articulo[index]);

   }
}