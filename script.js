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
});

// this function toggles the background color between light and dark mode
function bgColorChange()
{
    // var to hold the color element theme-toggle
    const body = document.getElementById("theme-toggle");

    // get the current background color
    const currentBG = getComputedStyle(body).backgroundColor;

    //  check if current color is white
    if (currentBG === 'rgb(255, 255, 255)')
    {
        // switch to dark mode
        body.style.backgroundColor = 'rgb(18, 18, 18)';
        body.style.color = 'rgb(255, 255, 255)';

        // change icon to sun
        const icon = document.querySelector("i");
        icon.classList = "fa fa-sun";
    }

    // if current color is black
    else if (currentBG === 'rgb(18, 18, 18)')
    {
        // switch to light mode
        body.style.backgroundColor = 'rgb(255, 255, 255)';
        body.style.color = 'rgb(0, 0, 0)';

        // change icon to moon
        const icon = document.querySelector("i");
        icon.classList = "fa fa-moon";
    }
}