document.addEventListener("DOMContentLoaded", function () {
    /** Smooth Scrolling for All Navbar Links **/
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /** Responsive Mobile Menu Toggle **/
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.querySelector("nav").appendChild(menuToggle);
    
    menuToggle.addEventListener("click", () => {
        document.querySelector("nav ul").classList.toggle("active");
    });

    /** Parallax Scrolling Effect **/
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        document.querySelector("header").style.backgroundPositionY = -(scrollTop * 0.5) + "px";
    });

    /** Product Filtering System **/
    const products = document.querySelectorAll(".category");
    products.forEach(product => {
        product.addEventListener("click", function () {
            alert("You selected: " + this.textContent);
        });
    });

    /** Wishlist System using LocalStorage **/
    document.querySelectorAll(".wishlist-btn").forEach(button => {
        button.addEventListener("click", function () {
            let product = this.getAttribute("data-product");
            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            if (!wishlist.includes(product)) {
                wishlist.push(product);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                alert(product + " added to Wishlist!");
            } else {
                alert(product + " is already in Wishlist.");
            }
        });
    });

    /** Shopping Cart System using LocalStorage **/
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = this.getAttribute("data-product");
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(product + " added to Cart!");
        });
    });

    /** Dark/Light Mode Toggle **/
    const themeToggle = document.createElement("button");
    themeToggle.classList.add("theme-toggle");
    themeToggle.textContent = "🌙";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    /** Back-to-Top Button **/
    const backToTop = document.createElement("button");
    backToTop.classList.add("back-to-top");
    backToTop.textContent = "↑";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 500 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /** Preloader Animation **/
    const preloader = document.createElement("div");
    preloader.classList.add("preloader");
    preloader.innerHTML = `<div class="spinner"></div>`;
    document.body.appendChild(preloader);

    window.addEventListener("load", function () {
        setTimeout(() => preloader.style.display = "none", 1500);
    });

    /** Lazy Load Images **/
    const lazyImages = document.querySelectorAll("img[data-src]");
    const lazyLoad = target => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    observer.unobserve(img);
                }
            });
        });

        observer.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});
            
