document.addEventListener("DOMContentLoaded", function () {
    //Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
         
            if (this.getAttribute("href") === "#") return;

            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    //Dark / Light Mode Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = toggleBtn?.querySelector("i");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            //Switch icon style
            const dark = document.body.classList.contains("dark-mode");
            icon.classList = dark ? "fa fa-sun" : "fa fa-moon";
        });
    }
});