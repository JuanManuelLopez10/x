let galerias = []
document.addEventListener('DOMContentLoaded', async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    
    const respuesta = await fetch('./json/galerias.json')
    galerias = await respuesta.json()
    console.log(galerias);
    
    const header = document.getElementById('header')
    header.innerHTML=`
    <nav class="nav col-12 d-flex justify-content-around align-items-center">
    <a href="./index.html" class="col-3" ><img src="./assets/logo.png" class="col-8" alt=""></a>
    <a class="nav-link col-3" aria-current="page" href="./historia.html">Historia</a>
    <a class="nav-link col-3" href="./portfolio.html">Portfolio</a>
    <a class="nav-link col-3" href="#">Tips</a>
    </nav>
    `

    const main = document.getElementById('main')
    main.innerHTML= `
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" id="carousel-inner">
        </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    `
    const carouselinner = document.getElementById('carousel-inner')
    galerias.forEach(element => {
        const carouselitem = document.createElement('div')
        carouselitem.innerHTML=`
        <picture>
            <source media="(orientation: portrait)" srcset="./assets/galerias/${element.nombre}/vertical-1.png">
            <img class="imagenprincipal" src="./assets/galerias/${element.nombre}/horizontal-1.png" alt="">
        </picture>
        <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
        `
        if (galerias.indexOf(element)===0) {
            carouselitem.setAttribute('class','carousel-item active')
        }else{
            carouselitem.setAttribute('class','carousel-item')
        }
        carouselinner.append(carouselitem)
    });

    const footer = document.getElementById("footer")
    footer.innerHTML= `
    <ul>
        <li class="d-flex justify-content-between p-2">
            <i class="bi-whatsapp linkfooter"></i>
            <a class="linkfooter" href="https://wa.me/59898344670" target="_blank">098 344 670</a>
        </li>
        <li class="d-flex justify-content-between p-2">
            <i class="bi-instagram linkfooter"></i>
            <a class="linkfooter" href="https://wa.me/59898344670" target="_blank">@_xph0</a>
        </li>
    </ul>
    `
})
