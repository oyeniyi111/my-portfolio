/* menu */
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
   navbar.classList.toggle("open-menu");
   menu.classList.toggle("move");
};

window.onscroll = () =>{
   navbar.classList.remove("open-menu");
   menu.classList.remove("move");
}


/* Background change on scroll */
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
})



   /* Scroll top */
   let scrollTop = document.querySelector(".scroll-top");

   window.addEventListener("scroll", () => {
       scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
   })
   
   





   // slider
   const people = document.querySelectorAll('.personPer');
const prevBtn = document.querySelector('#up');
const nextBtn = document.querySelector('#down');
const autoPlay = true;
let autoPlaypersonPer;

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

function showPrev(){
    prevpersonPer()
    //reset autoplay after clicking arrow
    if(autoPlay){
        //stop autoplay
        clearInterval(autoPlaypersonPer)
        //resume autoplay
        autoPlaypersonPer = setInterval(nextpersonPer,4000)
    }
}

function showNext(){
    nextpersonPer();
        //reset autoplay after clicking arrow
        if(autoPlay){
            //stop autoplay
            clearInterval(autoPlaypersonPer)
            //resume autoplay
            autoPlaypersonPer = setInterval(nextpersonPer,4000)
        }
}

function prevpersonPer(){
    //select active
    const activepersonPer = document.querySelector('.show')
    //remove active
    activepersonPer.classList.remove('show')
    if(activepersonPer.previousElementSibling){
        activepersonPer.previousElementSibling.classList.add('show')
    } else {
        // add active class to last personPer
        people[people.length - 1].classList.add('show')
    }
}

function nextpersonPer(){
    //select active
    const activepersonPer = document.querySelector('.show')
    //remove active
    activepersonPer.classList.remove('show')
    if(activepersonPer.nextElementSibling){
        activepersonPer.nextElementSibling.classList.add('show')
    } else {
        people[0].classList.add('show')
    }
}

// create auto play sliderSlide
if(autoPlay){
    autoPlaypersonPer = setInterval(nextpersonPer, 4000)
}




// skills-tab
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
   tab.addEventListener("click", () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContent.forEach(tabContents =>{
        tabContents.classList.remove('skills_active')
      })

      target.classList.add('skills_active')


      tabs.forEach(tab =>{
         tab.classList.remove('skills_active')
       })
 
       tab.classList.add('skills_active')
   })
})



/* Mixitup */
let mixerportfolio = mixitup(".work_container", {
   selectors: {
       target: ".work_card"
   },
   animation: {
       duration: 300
   }
});

/* link active work */
const linkWork = document.querySelectorAll(".work_item")

function activeWork(){
    linkWork.forEach(l=> l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))


/*woek popup */
document.addEventListener("click", (e) =>{
   if(e.target.classList.contains("work_button")){
       togglePortfolioPopup();
       portfolioItemDetails(e.target.parentElement);
   }
})

function togglePortfolioPopup(){
   document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
   
   document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
   
     document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}



// SERVICES MODAL
const modalViews = document.querySelectorAll('.services_modal'),
modalBtns = document.querySelectorAll('.services_button'),
modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
   modalBtn.addEventListener('click', () =>{
      modal(i)
   })
})

modalCloses.forEach((modalClose) =>{
   modalClose.addEventListener("click", () =>{
      modalViews.forEach((modalView) =>{
         modalView.classList.remove('active-modal')
      })
   })
})


/* Auto text */
let typed = new Typed(".tolu", {
   strings:["Oyeniyi Tolulope John", "a Web Developer", "a Web Designer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
})

