
const ls= localStorage,
d=document,
w=window,
navBar = d.querySelector(".navbar")
const link=d.querySelectorAll("a")
const linkMenu=d.querySelectorAll(".a")


w.addEventListener("scroll",()=>{
    if(this.scrollY > 30){
        navBar.classList.add("sticky")
       
        link.forEach(x=>x.classList.replace("navbar__link--a","navbar__link--white"))
       
    }else{
        navBar.classList.remove("sticky")
      
        link.forEach(x=>x.classList.replace("navbar__link--white","navbar__link--a"))
    }

  /*   if(this.scrollY>500){
        $scrollBtn.classList.remove("hidden")
        $scrollBtn.addEventListener("click",()=>{
            w.scrollTo({
                        behavior:"smooth",
                        top:0
                      })
             })
    }
    else $scrollBtn.classList.add("hidden")
 */
})

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

 darkTheme(".dark-theme-btn")