
//Index - Simulador agregar carrito
class Producto {
    constructor(id, nombre, precio, detalle, img) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.img = img;
        this.agregar = false;
    }
}

const productos = [];

productos.push(vino1 = new Producto(1, "2021 Rosé", 42, "Lorem ipsum dolor, sit amet", "./img/vino1.jpg"));
productos.push(vino2 = new Producto(2, "2017 Pinot Noir", 70, "Lorem ipsum dolor, sit amet", "./img/vino2.jpg"));
productos.push(vino3 = new Producto(3, "2018 White Blend", 36, "Lorem ipsum dolor, sit ame ", "./img/vino3.jpg"));
productos.push(vino4 = new Producto(4, "2017 Grenache", 65, "Lorem ipsum dolor, sit amet", "./img/vino4.jpg"));
productos.push(vino5 = new Producto(5, "2021 Rosé", 42, "Lorem ipsum dolor, sit amet", "./img/vino5.jpg"));
productos.push(vino6 = new Producto(6, "2017 Pinot Noir", 70, "Lorem ipsum dolor, sit amet", "./img/vino6.jpg"));
productos.push(vino7 = new Producto(7, "2018 White Blend", 36, "Lorem ipsum dolor, sit amet", "./img/vino7.jpg"));
productos.push(vino8 = new Producto(8, "2017 Grenache", 65, "Lorem ipsum dolor, sit amet", "./img/vino8.jpg"));
productos.push(vino9 = new Producto(9, "2017 Pinot Noir", 70, "Lorem ipsum dolor, sit amet", "./img/vino6.jpg"));
productos.push(vino10 = new Producto(10, "2018 White Blend", 36, "Lorem ipsum dolor, sit amet", "./img/vino7.jpg"));

for (const p of productos) {

    $("#contenedorProdu").append(`<div class="item">
      <img src= ${p.img} alt="wine"></img>
      <h4> ${p.nombre}</h4>
      <h4>  ${p.precio} USD </h4>
      <h4> ${p.detalle} </h4>
      <button class="btn btn-success" id="btn${p.id}">Comprar</button>
      </div>
     `).css({ display: "flex"});


    //Asociamos el evento a botón recién creado.
    $(`#btn${p.id}`).on('click', () => {
        new swal({
            text: "Product added",
            title: "Well Done!",
            icon: "success"
        })
        console.log(`Seleccionado: Comprar ${p.nombre} - total + IVA por producto: ${p.precio * 1.21.toFixed(2)}`);
    }).css({ marginTop: "15px" });
}



console.log(productos);

let pasoJson = JSON.stringify(productos);
console.log(pasoJson);

// 
$("#next").prepend("<h2>Coming soon ... </h2>");

const surprises = [{
    img: "./img/vino10.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",

},
{
    img: "./img/vino9.jpg",
    name: "Lorem ipsum dolor",
    type: "rosé",
    alcohol: "8%",

},
{
    img: "./img/vino8.jpg",
    name: "Lorem ipsum dolori",
    type: "white",
    alcohol: "10%",

}]

for (const s of surprises) {

    $("#view").append(`<div class="deluxe"><h3>
    Deluxe</h3>
    <img src= ${s.img}>
    <h4> Name: ${s.name}</h4>
    <h4> Type: ${s.type} </h4>
    <h4> Alcohol: ${s.alcohol} </h4>
    </div>
    ` ).css({ display: "flex" });
}



// dark - light mode
let darkMode;

if (localStorage.getItem('dark-mode')) {
    darkMode = localStorage.getItem('dark-mode');
} else {
    darkMode = "light";
}

localStorage.setItem('dark-mode', darkMode);

$(() => {
    if (localStorage.getItem('dark-mode') == "dark") {
        $('body').addClass("dark");
        $('#boton-dark-mode').hide();
        $('#boton-light-mode').show();
    } else {
        $('#boton-light-mode').hide();
    }

    //light mode
    $('#boton-light-mode').click(() => {
        $('#boton-light-mode').hide();
        $('#boton-dark-mode').show();
        $('body').removeClass("dark");

        localStorage.setItem('dark-mode', "light");
    })

    //dark mode
    $('#boton-dark-mode').click(() => {
        $('#boton-light-mode').show();
        $('#boton-dark-mode').hide();
        $('body').addClass("dark");
        localStorage.setItem('dark-mode', "dark");
    })
})


// animación logo en index y contact
const URLIMG = 'https://www.bayareamade.us/wp-content/uploads/2017/10/Aesop_Logo_Black.png';

const DURACION = 2000;
$('main').append(`<div id="logoAnimate" style="display:flex">
                    <img id="logoBanner" src="${URLIMG}" width="200" height="40">
                    <h3 id="textBanner">Follow us @aesop</h3>
                  </div>`);
$('#logoBanner')
    .fadeOut(DURACION, () => { $("#textBanner").html("Follow us @aesop") })
    .fadeIn(DURACION, () => { $("#textBanner").html("every week there is a gift for you") })
    .animate({ opacity: 0.75, width: "+=200", height: "+=40" },
        DURACION,
        () => { $("#textBanner").html("Follow us @aesop") });



