/*=====================================================
PREMIUM PORTFOLIO
FALAHUDIN AZIZI
SCRIPT.JS
PART 1
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
    ELEMENT
    =====================================================*/

    const loader = document.getElementById("loader");

    const navbar = document.querySelector(".navbar");

    const hamburger = document.querySelector(".hamburger");

    const navMenu = document.querySelector(".nav-menu");

    const menuLinks = document.querySelectorAll(".nav-menu a");

    const backToTop = document.getElementById("backToTop");

    const progressBar = document.querySelector(".progress-bar");

    const year = document.getElementById("year");



    /*=====================================================
    LOADER
    =====================================================*/

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 900);

    });



    /*=====================================================
    STICKY NAVBAR
    =====================================================*/

    function stickyNavbar() {

        if (window.scrollY > 80) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    }

    stickyNavbar();

    window.addEventListener("scroll", stickyNavbar);



    /*=====================================================
    MOBILE MENU
    =====================================================*/

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

    });



    /*=====================================================
    CLOSE MENU
    =====================================================*/

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");

            navMenu.classList.remove("active");

        });

    });



    /*=====================================================
    ACTIVE MENU
    =====================================================*/

    const sections = document.querySelectorAll("section");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            const height = section.offsetHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);



    /*=====================================================
    SCROLL PROGRESS
    =====================================================*/

    function scrollProgress() {

        if (!progressBar) return;

        const totalHeight =

            document.documentElement.scrollHeight -

            document.documentElement.clientHeight;

        const progress =

            (window.pageYOffset / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    window.addEventListener("scroll", scrollProgress);



    /*=====================================================
    BACK TO TOP
    =====================================================*/

    function showBackToTop() {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", showBackToTop);



    backToTop.addEventListener("click", e => {

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /*=====================================================
    UPDATE YEAR
    =====================================================*/

    if(year){

        year.textContent = new Date().getFullYear();

    }



});
/*=====================================================
PART 2
Typing - Counter - Reveal Animation
=====================================================*/

/*=====================================================
TYPING EFFECT
=====================================================*/

const typingElement = document.getElementById("typing");

if (typingElement) {

    const texts = [

        "Business Management Student",

        "IT Support",

        "Computer Networking",

        "Digital Business Enthusiast"

    ];

    let textIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typingAnimation() {

        const current = texts[textIndex];

        if (!deleting) {

            typingElement.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(typingAnimation, 1800);

                return;

            }

        } else {

            typingElement.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                textIndex++;

                if (textIndex >= texts.length) {

                    textIndex = 0;

                }

            }

        }

        setTimeout(

            typingAnimation,

            deleting ? 40 : 90

        );

    }

    typingAnimation();

}

/*=====================================================
COUNTER ANIMATION
=====================================================*/

const counters = document.querySelectorAll(".counter");

const speed = 80;

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

const increment = Math.ceil(target/speed);

count += increment;

if(count >= target){

counter.innerText = target;

}else{

counter.innerText = count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=====================================================
REVEAL ANIMATION
=====================================================*/

const revealElements = document.querySelectorAll(

".hero-left,.hero-right,.section-header,.about-grid,.experience-card,.project-card,.skill-card,.gallery-card,.contact-grid"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

}

);

revealElements.forEach(item=>{

item.classList.add("fade-up");

revealObserver.observe(item);

});

/*=====================================================
FLOATING EFFECT
=====================================================*/

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card,index)=>{

card.style.animationDelay=(index*.8)+"s";

});

/*=====================================================
MOUSE PARALLAX HERO
=====================================================*/

const hero = document.querySelector(".hero");

const photo = document.querySelector(".photo-wrapper");

if(hero && photo){

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

photo.style.transform=

`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

photo.style.transform="translate(0,0)";

});

}

/*=====================================================
HERO FADE
=====================================================*/

window.addEventListener("load",()=>{

const heroLeft=document.querySelector(".hero-left");

const heroRight=document.querySelector(".hero-right");

if(heroLeft){

heroLeft.style.opacity="1";

heroLeft.style.transform="translateX(0)";

}

if(heroRight){

heroRight.style.opacity="1";

heroRight.style.transform="translateX(0)";

}

});

/*=====================================================
SECTION HOVER
=====================================================*/

const cards=document.querySelectorAll(

".glass-card,.experience-card,.project-card,.portfolio-stat-card,.tool-card,.softskill-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

/*=====================================================
END PART 2
=====================================================*/
/*=====================================================
PART 3
Gallery - Lightbox - Contact
=====================================================*/

/*=====================================================
SMOOTH SCROLL
=====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

}

});

});

/*=====================================================
GALLERY FILTER
=====================================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const galleryItems=document.querySelectorAll(".gallery-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}else{

if(item.classList.contains(filter)){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}else{

item.style.opacity="0";

item.style.transform="scale(.8)";

setTimeout(()=>{

item.style.display="none";

},300);

}

}

});

});

});

/*=====================================================
LIGHTBOX
=====================================================*/

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightbox-image");

const closeLightbox=document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-card img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

lightboxImage.alt=image.alt;

document.body.style.overflow="hidden";

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

document.body.style.overflow="auto";

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

});

}

/*=====================================================
CONTACT FORM
=====================================================*/

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=contactForm.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.hasAttribute("required") && input.value.trim()===""){

input.style.borderColor="#ff4d4f";

valid=false;

}else{

input.style.borderColor="rgba(255,255,255,.15)";

}

});

if(valid){

showToast("Pesan berhasil dikirim.");

contactForm.reset();

}else{

showToast("Mohon lengkapi semua data.");

}

});

}

/*=====================================================
NEWSLETTER
=====================================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

const email=newsletter.querySelector("input");

if(email.value===""){

showToast("Masukkan email terlebih dahulu.");

return;

}

showToast("Terima kasih telah berlangganan.");

newsletter.reset();

});

}

/*=====================================================
TOAST
=====================================================*/

function showToast(message){

let toast=document.querySelector(".toast");

if(!toast){

toast=document.createElement("div");

toast.className="toast";

document.body.appendChild(toast);

}

toast.textContent=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},3000);

}

/*=====================================================
ESC CLOSE LIGHTBOX
=====================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape" && lightbox){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

});

/*=====================================================
END PART 3
=====================================================*/
/*=====================================================
PART 4
Dark Mode - Cursor - Performance
=====================================================*/

/*=====================================================
DARK MODE
=====================================================*/

const darkButton = document.getElementById("darkMode");

if (darkButton) {

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {

        document.body.classList.add("light-mode");

        darkButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            darkButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            darkButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}

/*=====================================================
CURSOR GLOW
=====================================================*/

const cursor = document.createElement("div");
cursor.className = "cursor";

const cursorOutline = document.createElement("div");
cursorOutline.className = "cursor-outline";

document.body.appendChild(cursor);
document.body.appendChild(cursorOutline);

window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorOutline.style.left = e.clientX + "px";
    cursorOutline.style.top = e.clientY + "px";

});

document.querySelectorAll("a,button,.gallery-card").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform =
            "translate(-50%,-50%) scale(1.8)";

        cursorOutline.style.transform =
            "translate(-50%,-50%) scale(1.5)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform =
            "translate(-50%,-50%) scale(1)";

        cursorOutline.style.transform =
            "translate(-50%,-50%) scale(1)";

    });

});

/*=====================================================
MOUSE SPOTLIGHT
=====================================================*/

window.addEventListener("mousemove", e => {

    document.documentElement.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});

/*=====================================================
LAZY IMAGE
=====================================================*/

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(

(entries, observer) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

const img = entry.target;

img.classList.add("loaded");

observer.unobserve(img);

}

});

},

{

threshold: .2

}

);

lazyImages.forEach(img => {

imageObserver.observe(img);

});

/*=====================================================
OPTIMIZE RESIZE
=====================================================*/

let resizeTimer;

window.addEventListener("resize", () => {

clearTimeout(resizeTimer);

resizeTimer = setTimeout(() => {

console.log("Layout Updated");

}, 250);

});

/*=====================================================
OPTIMIZE SCROLL
=====================================================*/

let ticking = false;

window.addEventListener("scroll", () => {

if (!ticking) {

window.requestAnimationFrame(() => {

ticking = false;

});

ticking = true;

}

});

/*=====================================================
PRELOAD IMAGE
=====================================================*/

function preloadImages() {

const images = [

"assets/img/profile.png",

"assets/gallery/brin.jpg",

"assets/gallery/kopindosat.jpg",

"assets/gallery/rtrwnet.jpg"

];

images.forEach(src => {

const img = new Image();

img.src = src;

});

}

preloadImages();

/*=====================================================
PAGE TRANSITION
=====================================================*/

window.addEventListener("beforeunload", () => {

window.scrollTo(0, 0);

});

/*=====================================================
WELCOME MESSAGE
=====================================================*/

console.log(

"%cWelcome to Falahudin Azizi Portfolio",

"color:#FFD700;font-size:18px;font-weight:bold;"

);

console.log(

"%cDeveloped with HTML CSS JavaScript",

"color:#4FC3F7;font-size:13px;"

);

/*=====================================================
INITIALIZE
=====================================================*/

document.body.classList.add("loaded");

/*=====================================================
END
=====================================================*/