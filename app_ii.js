
/*carousel
--------------------------------*/

const presents = [
    {
        id: 1,
        img: "img/capa_i.png",
    },
    {
        id: 2,
        img: "img/capa_ii.png",
    },
    {
        id: 3,
        img: "img/capa_iii.png",
    },
    {
        id: 4,
        img: "img/capa_iv.png",
    },
    {
        id: 5,
        img: "img/capa_v.png",
    },
    {
        id: 6,
        img: "img/capa_vi.png",
    },
]

/*selecionar elemento
--------------------------------*/
const img = document.getElementById('capa')
const slideBtn = document.querySelectorAll('.slide-show')

//item do slide
let itemAtual = 0;


setInterval( function mostrarItem(){
    const item = presents[itemAtual]
    img.src = item.img;

    itemAtual++
    if(itemAtual > presents.length-1){
        itemAtual=0
    }
}, 4000);


/*navegação
--------------------------------*/

const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".carousel-prev-btn");
const btnRight = document.querySelector(".carousel-next-btn");
const indicators = document.querySelectorAll(".indicator");
let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider

let jogos = [
    {
        id: 1,
        src: "img/game_1.png",
    },
    {
        id: 2,
        src: "img/game_2.png",
    },
    {
        id: 3,
        src: "img/game_3.png",
    },
    {
        id: 4,
        src: "img/game_4.png",
    },
    {
        id: 5,
        src: "img/game_5.png",
    },
    {
        id: 6,
        src: "img/game_6.png",
    },
    {
        id: 7,
        src: "img/game_7.png",
    },
    {
        id: 8,
        src: "img/game_8.png",
    },
    {
        id: 9,
        src: "img/game_9.png",
    },
    {
        id: 10,
        src: "img/game_10.png",
    },
    {
        id: 11,
        src: "img/game_11.png",
    },
    {
        id: 12,
        src: "img/game_12.png",
    },
    {
        id: 13,
        src: "img/game_13.png",
    },
    {
        id: 14,
        src: "img/game_14.png",
    },
    {
        id: 15,
        src: "img/game_15.png",
    },
];

function populateSlider() {
    jogos.forEach((image) => {
        const novoJogo = document.getElementById("jogo_0");
        let clone = novoJogo.cloneNode(true);
        let img = clone.querySelector(".imagemClone");
        img.src = image.src;
        slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
      });
    }


    populateSlider();
    

    // delete the initial game in the html
    const primeiroJogo = document.getElementById("jogo_0");
    primeiroJogo.remove();

    function updateIndicators(index) {
        indicators.forEach((indicator) => {
          indicator.classList.remove("active");
        });
        let newActiveIndicator = indicators[index];
        newActiveIndicator.classList.add("active");
      }
   
      
      // Scroll Left button
btnLeft.addEventListener("click", (e) => {
    let movieWidth = document.querySelector(".carouselBox").getBoundingClientRect()
      .width;
    let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
    slider.scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  });

  // Scroll Right button
btnRight.addEventListener("click", (e) => {
    let movieWidth = document.querySelector(".carouselBox").getBoundingClientRect()
      .width;
    let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);
    // if we're on the last page
    if (activeIndex == 2) {
      // duplicate all the items in the slider (this is how we make 'looping' slider)
      populateSlider();
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = 0;
      updateIndicators(activeIndex);
    } else {
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = (activeIndex + 1) % 3;
      console.log(activeIndex);
      updateIndicators(activeIndex);
    }
  });