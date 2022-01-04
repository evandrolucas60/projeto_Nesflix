const carousel = [
    {
        id:1,
        img: "img/img_1.png",
    },
    {
        id:2, 
        img: "img/img_2.png",
    },
    {
        id:3, 
        img: "img/img_3.png",
    }
]

//Selecionando o item
const img = document.getElementById('imagem-promo')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

//item padrão (1º item )
let itemAtual = 0

//Carregar primeira foto
window.addEventListener('DOMContentLoaded', function (){
    mostraItem()
})

function mostraItem(){
    const item = carousel[itemAtual]
    img.src = item.img;
}

//Proximo item

nextBtn.addEventListener('click', function(){
    itemAtual++
    if(itemAtual > carousel.length-1){
        itemAtual = 0;
    }
    mostraItem()
})

console.log(nextBtn)

//item anterior

prevBtn.addEventListener('click', function(){
    itemAtual--
    if(itemAtual < 0){
        itemAtual = carousel.length-1
    }
    mostraItem()
})

