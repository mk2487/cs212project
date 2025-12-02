// Important RGB Values to be consistent with:
// if you want to add more or change just make sure to update here and in the code accordingly

// white rgb value is (255, 255, 255)
// black rgb value is (0, 0, 0)
// darker grey rgb value is (20, 20, 20)
// dark grey rgb value is (40, 40, 40)
// light grey rgb value is (240, 240, 240)

document.addEventListener("DOMContentLoaded", function () 
{
    //Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => 
    {
        anchor.addEventListener("click", function (e) 
        {
         
            if (this.getAttribute("href") === "#") return;

            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) 
            {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
    
    if (backToTopBtn) {
        // Show button when scrolled down 300px
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// this function toggles the background color between light and dark mode
function bgColorChange()
{
    // var to hold the color element theme-toggle
    const body = document.getElementById("theme-toggle");

    // get the current background color
    const currentBG = getComputedStyle(body).backgroundColor;

    //  check if current color is white -> change to black theme
    if (currentBG === 'rgb(255, 255, 255)')
    {
        // Header only has text to change color
            // save header element to a variable
        const header = document.querySelector("header");
            // change header text color to white in dark mode
        header.style.color = 'rgb(255, 255, 255)';

        // now get navbar and change its background and link colors
        const navbar = document.getElementById("navbar");
        const navabarLinks = document.querySelectorAll(".nav-item a");

            // change navbar background to dark grey in dark mode
        navbar.style.backgroundColor = 'rgb(40, 40, 40)';
            // change navbar link colors to white in dark mode
        navabarLinks.forEach(link => {
            link.style.color = 'rgb(255, 255, 255)';
        });

        // change navbar toggler icon to light in dark mode
        const toggler = document.querySelector(".navbar-toggler-icon");
        if (toggler) {
            toggler.style.filter = 'invert(1)';
        }


        // changing the body background to black
        body.style.backgroundColor = 'rgb(20, 20, 20)';
        // changing the body text to white
        body.style.color = 'rgb(255, 255, 255)';

        // change icon to sun for dark mode
        const icon = document.querySelector("i");
        icon.classList = "fa fa-sun";

        // change the cards to be greyish in dark mode for all under id teams
        const cards = document.querySelectorAll("#team .card-body");
        cards.forEach(card => {
            card.style.backgroundColor = 'rgb(40, 40, 40)';
            card.style.color = 'rgb(255, 255, 255)';
        });

        // change the footer background to dark grey in dark mode
        const footer = document.querySelector("footer");
        footer.style.backgroundColor = 'rgb(20, 20, 20)';

        // change the contact section to be greyish in dark mode
        const contactSection = document.getElementById("contact");
        contactSection.style.backgroundColor = 'rgb(40, 40, 40)';
        // change contact section text to white in dark mode
        contactSection.style.color = 'rgb(255, 255, 255)';
    }

    // if current color is black then change to white theme
    else if (currentBG === 'rgb(20, 20, 20)')
    {
        // Header only has text to change color
            // save header element to a variable
        const header = document.querySelector("header");
            // change header text color to black in light mode
        header.style.color = 'rgb(0, 0, 0)';

        // now get navbar and change its background and link colors
        const navbar = document.getElementById("navbar");
        const navabarLinks = document.querySelectorAll(".nav-item a");

            // change navbar background to light grey in light mode
        navbar.style.backgroundColor = 'rgb(240, 240, 240)';
            // change navbar link colors to black in light mode
        navabarLinks.forEach(link => {
            link.style.color = 'rgb(0, 0, 0)';
        });

        // change navbar toggler icon to dark in light mode
        const toggler = document.querySelector(".navbar-toggler-icon");
        if (toggler) {
            toggler.style.filter = 'invert(0)';
        }

        // chainging the body background to white
        body.style.backgroundColor = 'rgb(255, 255, 255)';
        // chainging the body text to black
        body.style.color = 'rgb(0, 0, 0)';

        // change icon to moon
        const icon = document.querySelector("i");
        icon.classList = "fa fa-moon";

        // change the cards to be white in light mode for all under id teams
        const cards = document.querySelectorAll("#team .card-body");
        // change the card text color to black in light mode
        cards.forEach(card => {
            card.style.backgroundColor = 'rgb(255, 255, 255)';
            card.style.color = 'rgb(0, 0, 0)';
        });

        // change the footer background to white in light mode
        const footer = document.querySelector("footer");
        footer.style.backgroundColor = 'rgb(255, 255, 255)';

        // change the contact section to be light grey in light mode
        const contactSection = document.getElementById("contact");
        contactSection.style.backgroundColor = 'rgb(240, 240, 240)';
        // setting contact section text to black in light mode
        contactSection.style.color = 'rgb(0, 0, 0)';
    }
}