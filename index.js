const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
        toggle.querySelector("a").style.transform= "rotate(180deg)";
    } else if(menu.classList.contains("search-active")){
      menu.classList.remove("search-active");
      menu.classList.add("active");

      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
      toggle.querySelector("a").style.transform= "rotate(90deg)";
      togglesearch.querySelector("a").style.background="#222";
    }
    else if(menu.classList.contains("subscribediv-active")){
      menu.classList.remove("subscribediv-active");
      menu.classList.add("active");

      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
      toggle.querySelector("a").style.transform= "rotate(90deg)";
      
    }
    else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
        toggle.querySelector("a").style.transform= "rotate(90deg)";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/*for search menu*/
const togglesearch = document.querySelector(".togglesearch");
const x= window.matchMedia("screen and (min-width:1024px)");
/* Toggle search menu */
function togglesearchMenu() {
  if (menu.classList.contains("search-active") && x.matches) {
    menu.classList.remove("search-active");

    togglesearch.querySelector("a").style.background="#fff";
  }
  else  if (menu.classList.contains("search-active")) {
        menu.classList.remove("search-active");

        togglesearch.querySelector("a").style.background="#222";
      }
     
      else if(menu.classList.contains("active")){
      menu.classList.remove("active");
      menu.classList.add("search-active");
      
      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
      toggle.querySelector("a").style.transform= "rotate(180deg)";

      togglesearch.querySelector("a").style.background="#FF8D53";
    }
    else if(menu.classList.contains("subscribediv-active")){
      menu.classList.remove("subscribediv-active");
      menu.classList.add("search-active");
      
      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
     

      togglesearch.querySelector("a").style.backgroundColor="#FF8D53";
    }
    else {
        menu.classList.add("search-active");
        togglesearch.querySelector("a").style.background="linear-gradient(90.09deg, #db4b66 0%, #FF8E4F 100%)";
    
        
    }
}
 
/* Event Listener */
togglesearch.addEventListener("click", togglesearchMenu, false);

//giving a variable x the media query

/*for subscribe*/
const subscribe = document.querySelector(".subscribe");
 

/*toggle subscribe menu*/
function togglesubscribeMenu(){
  if (menu.classList.contains("subscribediv-active")) {
      menu.classList.remove("subscribediv-active");
  }else if(menu.classList.contains("active")){
      menu.classList.remove("active")
      menu.classList.add("subscribediv-active")
      toggle.querySelector("a").style.transform= "rotate(180deg)";
    }else if(menu.classList.contains("search-active")){
      menu.classList.remove("search-active")
      menu.classList.add("subscribediv-active")
      togglesearch.querySelector("a").style.background="#222";
    }
    else if((menu.classList.contains("search-active")) && (window.matchMedia("(min-width:1024px)").matches)){
      menu.classList.remove("search-active");
      menu.classList.add("subscribediv-active");
      togglesearch.querySelector("a").style.backgroundColor="#fff";
    }
  else{
    menu.classList.add("subscribediv-active");
  }
}
/*event listener*/
subscribe.addEventListener("click", togglesubscribeMenu, false);


 


const items = document.querySelectorAll(".item");

 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");

    
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("mouseover", toggleItem, false);
      item.addEventListener("mouseout", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);
 
  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
 
/* Event listener */
document.addEventListener("click", closeSubmenu, false);