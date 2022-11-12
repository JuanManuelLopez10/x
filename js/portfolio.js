let galerias = []
const main = document.getElementById('main')
main.innerHTML=`
<section class="bg-black d-flex pre align-items-center justify-content-around col-12" id="pre">
<img src="./assets/logo.png" class="animate__animated animate__zoomIn col-5 col-lg-2">
</section>
`
document.addEventListener('DOMContentLoaded', async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    const pre = document.getElementById('pre')

    const respuesta = await fetch('./json/galerias.json')
    galerias = await respuesta.json()
    console.log(galerias);
    
    const header = document.getElementById('header')
    header.innerHTML=`
    <nav class="nav col-12 d-flex justify-content-around align-items-center">
    <a href="./index.html" class="col-3 animate__animated animate__fadeInDown" ><img src="./assets/logo.png" class="col-8" alt=""></a>
    <a class="nav-link col-3 animate__animated animate__fadeInDown" aria-current="page" href="./historia.html">Historia</a>
    <a class="nav-link col-3 animate__animated animate__fadeInDown" href="./portfolio.html">Portfolio</a>
    <a class="nav-link col-3 animate__animated animate__fadeInDown" href="#">Tips</a>
    </nav>
    `

    const body = document.querySelector("body")
    console.log(body.id);
    const main = document.getElementById('main')
    body.setAttribute('style',`background-image: url(./assets/${body.id}.jpg);`)
    const categorias = document.createElement('div')
    categorias.setAttribute('class','main col-12 h100 d-flex justify-content-around flex-wrap')
    main.append(categorias)
    galerias.forEach(element => {
        const imagenopciongaleria = document.createElement('a')
        imagenopciongaleria.setAttribute('class','col-4 m-2 opciongaleria animate__animated animate__fadeInUp')
        imagenopciongaleria.innerHTML=`
        <picture>
            <source media="(orientation: portrait)" srcset="./assets/galerias/${element.nombre}/vertical-1.png">
            <img class="imagenport col-12" src="./assets/galerias/${element.nombre}/horizontal-1.png">
        </picture>
        <h4 class="nombreopcion">${element.nombre}<h4>
        `
        categorias.append(imagenopciongaleria)
    });


    const footer = document.getElementById("footer")
    footer.innerHTML= `
    <ul class="d-flex">
        <li class="d-flex col-6 justify-content-around p-1">
            <i class="bi-whatsapp linkfooter"></i>
            <a class="linkfooter" href="https://wa.me/59898344670" target="_blank">098 344 670</a>
        </li>
        <li class="d-flex col-6 justify-content-around p-2">
            <i class="bi-instagram linkfooter"></i>
            <a class="linkfooter" href="https://wa.me/59898344670" target="_blank">@_xph0</a>
        </li>
    </ul>
    `
})
