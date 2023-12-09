// Inicio de api rest :de imagenes publicas de github.
const URL="https://api.thecatapi.com/v1/images/search?limit=10";

fetch (URL)
.then(res=>res.json())
.then(data=>{
    const img=document.querySelector('#img-tarjetas-gatitos');
    img.src=data[0].url;
});

const URL2="https://api.thecatapi.com/v1/images/search?limit=10";

fetch (URL2)
.then(res=>res.json())
.then(data=>{
    const img2=document.querySelector('#img-tarjetas-gatitos2');
    img2.src=data[0].url;
});

const URL3="https://api.thecatapi.com/v1/images/search?limit=10";

fetch (URL3)
.then(res=>res.json())
.then(data=>{
    const img3=document.querySelector('#img-tarjetas-gatitos3');
    img3.src=data[0].url;
});

const URL4="https://api.thecatapi.com/v1/images/search?limit=10";

fetch (URL4)
.then(res=>res.json())
.then(data=>{
    const img4=document.querySelector('#img-tarjetas-gatitos4');
    img4.src=data[0].url;
});


const URLDOG="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOG)
.then(res=>res.json())
.then(data=>{
    const img5=document.querySelector('#img-tarjetas-perritos');
    img5.src=data[0].url;
});

const URLDOG2="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOG2)
.then(res=>res.json())
.then(data=>{
    const img6=document.querySelector('#img-tarjetas-perritos2');
    img6.src=data[0].url;
});

const URLDOG3="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOG3)
.then(res=>res.json())
.then(data=>{
    const img7=document.querySelector('#img-tarjetas-perritos3');
    img7.src=data[0].url;
});

const URLDOG4="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOG4)
.then(res=>res.json())
.then(data=>{
    const img8=document.querySelector('#img-tarjetas-perritos4');
    img8.src=data[0].url;
});

const URLDOGS1="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOGS1)
.then(res=>res.json())
.then(data=>{
    const imgs1=document.querySelector('#img-slide-1');
    imgs1.src=data[0].url;
});

const URLS2="https://api.thecatapi.com/v1/images/search?limit=10";

fetch (URLS2)
.then(res=>res.json())
.then(data=>{
    const imgs2=document.querySelector('#img-slide-2');
    imgs2.src=data[0].url;
});

const URLDOGS3="https://api.thedogapi.com/v1/images/search?limit=10";

fetch (URLDOGS3)
.then(res=>res.json())
.then(data=>{
    const imgs3=document.querySelector('#img-slide-3');
    imgs3.src=data[0].url;
});