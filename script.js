const d = document,
w = window;
const navBar = d.querySelector(".navbar")

const link=d.querySelectorAll("a")
const linkMenu=d.querySelectorAll(".a")
const panelBtn = d.getElementById("panel-btn")
const navBarContainer = d.querySelector(".navbar__container")
const menu = d.querySelector(".menu")
const $scrollBtn = d.querySelector(".scroll-top-btn")

const inputs = document.querySelectorAll(".main [required]")
const form = document.querySelector(".main__form")
const mensaje =document.getElementById("mensaje")
const button = document.querySelector(".form__button")
const label = document.getElementById("label")
const textarea = document.getElementById("textarea")

const content = d.querySelector(".content")
const close = d.querySelector(".close-btn")

const pModal=d.querySelector(".pattern")

const punto = d.querySelectorAll(".punto")
const grande = d.querySelector(".grande")
const puntos = d.querySelector(".puntos")


/* menu hamburguesa*/


panelBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu--active")
   panelBtn.classList.toggle("is-active")

    linkMenu.forEach(x=>{
        menu.addEventListener("click",e=>{
           if(e.target.offsetParent.classList.contains("menu--active")){
               e.target.offsetParent.classList.remove("menu--active")
               panelBtn.classList.toggle("is-active")
            }
        })
    })

})



w.addEventListener("scroll",()=>{
    if(this.scrollY > 30){
        navBar.classList.add("sticky")
       
        link.forEach(x=>x.classList.replace("navbar__link--a","navbar__link--white"))
       
    }else{
        navBar.classList.remove("sticky")
      
        link.forEach(x=>x.classList.replace("navbar__link--white","navbar__link--a"))
    }

    if(this.scrollY>500){
        $scrollBtn.classList.remove("hidden")
        $scrollBtn.addEventListener("click",()=>{
            w.scrollTo({
                        behavior:"smooth",
                        top:0
                      })
             })
    }
    else $scrollBtn.classList.add("hidden")

})


mensaje.addEventListener("keyup",()=>{

    if(mensaje.nextElementSibling.classList.contains("mensaje")) mensaje.nextElementSibling.classList.replace("mensaje","mensaje-js")
    
    if(mensaje.value.length<1) mensaje.nextElementSibling.classList.replace("mensaje-js","mensaje")
    })
   
   
   for (let i = 0; i < inputs.length; i++)
        inputs[i].addEventListener("keyup",()=>{
       if(inputs[i].nextElementSibling.classList.contains("form-label"))
           inputs[i].nextElementSibling.classList.replace("form-label","form-js")
       if (inputs[i].value.length<1) 
           inputs[i].nextElementSibling.classList.replace("form-js","form-label")
       
       })
 
d.addEventListener("submit",e=>{

    e.preventDefault();

  for (let i = 0; i < inputs.length; i++)
  if (inputs[i].value.length<1) {
    inputs[i].nextElementSibling.classList.replace("form-js","form-label") 
}

  textarea.classList.replace("mensaje-js","mensaje")

  fetch("https://formsubmit.co/ajax/balloonsmomentos@gmail.com",{
      method:"POST",
      body: new FormData(e.target)
  })
    .then(res=>res.ok ? res.json() : Promise.reject(res))
    .then(json=>{
        console.log(json)
        content.classList.remove("content__hide")
        pModal.innerHTML =` ${inputs[0].value}`
    })
    .catch(err=>{
        console.log(err)
    })
   
}) 

close.addEventListener("click",()=>{
    content.classList.add("content__hide")
    form.reset()
})


const typed = new Typed(".typed",{
    //strings: ['Frontend Developer.', '^1000 Accounting Public.'],
    stringsElement:"#strings",
    typeSpeed: 75,
    startDelay:300,
    backSpeed:90,
    smartBackSpace:true,
    shufle:false,
    backDelay:2500,
    loop:true,
    loopCount:false,
    contentType:"html"
})

punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener("click", ()=>{
      let position = i
      let operacion = position * -50

      grande.style.transform = `translateX(${operacion}%)`
     
      punto.forEach((cadaPunto, i)=>{
          punto[i].classList.remove("activo")
      })
      punto[i].classList.add("activo")
    })
   
})





/* const ls= localStorage;


const darkTheme = (darkBtn)=>{
    const themeBtn = d.querySelector(darkBtn),
        selectors = d.querySelectorAll("[data-dark]")
       
    let sun ="☀️", moon="🌙" ;

    const lightMode = ()=>{
        selectors.forEach(el=>el.classList.remove("dark-mode"))   
      
        themeBtn.textContent=moon;
        ls.setItem("theme","light")
    }
    const darkMode = ()=>{
        selectors.forEach(el=>el.classList.add("dark-mode"))
      
        themeBtn.textContent=sun;
        ls.setItem("theme","dark")
    }
    d.addEventListener("click",e=>{
        if(e.target.matches(darkBtn)){
            if(themeBtn.textContent===moon){
                darkMode()
             }else {
                lightMode()
            }
        }
     })

    d.addEventListener("DOMContentLoaded",()=>{ 
        if (ls.getItem("theme")==null)ls.setItem("theme","light")
        if(ls.getItem("theme")=="light")lightMode()
        if(ls.getItem("theme")=="dark")darkMode()

    })
    
}

 darkTheme(".dark-theme-btn") */