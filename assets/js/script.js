const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove")
});


// add even on multiply elements
const addEventOnElements = function (elements, eventType, callback){
    for (let i =0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * Nav bar toogle for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overly = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navbar.classList.toggle("active");
    overly.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


/**
 * Header
 */

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[this.window.scrollY >100 ? "add" : "remove"]("active");
})