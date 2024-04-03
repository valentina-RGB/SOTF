let sabores = document.getElementById('sabor');

let lista = [
    {
        "img": "../assets/img/sabores/vainilla.png",
        "descripcion": 'Vainilla',
        "estado": 'Agotado'
    },
    {
        "img": '../assets/img/sabores/chocolate.png',
        "descripcion": "Chocolate",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/Leches.png',
        "descripcion": "Tres Leches",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/fresa.png',
        "descripcion":"Fresa",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/brownie.png',
        "descripcion": "Brownie",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/maracuya.png',
        "descripcion": "Maracuyá",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/vainilla-Chips-Colores.png',
        "descripcion": "Vainilla Chips",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/ron-pasas.png',
        "descripcion": "Ron Con Pasas",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/cookies-cream.png',
        "descripcion": "Cookies and cream",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/frutos-Rojos.png',
        "descripcion": "Frutos Rojos",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/Mandarina-Limon.png',
        "descripcion": "Mandarina Limón",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/nucita.png',
        "descripcion": "Nucita",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/veteado-de-mora.png',
        "descripcion": "Veteado De Mora",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/lulo.png',
        "descripcion": "Lulo",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/carnaval.png',
        "descripcion": "Carnaval",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/macadamia.png',
        "descripcion": "Macadamia",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/arequipe.png',
        "descripcion": "Arequipe",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/acido-mix.png',
        "descripcion": "Acido Mix",
        "estado": "Disponible"
    },
    {
        "img": '../assets/img/sabores/BonBonBum.png',
        "descripcion": "Bon Bon Bum",
        "estado": "Disponible"
    },
]


lista.forEach(p=>{
    sabores.innerHTML += `
    <div class="col-12 col-md-4 mb-4 text-center">
        <div class="card h-100 ">
            <div class="tamanio m-auto px-2">
                <a href="#" class="img-sabores">
                    <img  class="rounded-circle" src="${p.img}" />
                </a>
            </div>
            <div class="card-body text-center">
                <a href="#" class="h2 text-decoration-none text-dark">${p.descripcion}</a>
                <p class="card-text">
                    ${p.estado}
                </p>
                <p class="text-muted">Reviews (74)</p>
            </div>
        </div>
        </div>
    `;


})
    
    
    
