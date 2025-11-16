function bgColorChange() 
{
    // create a variable for the body section body
    const layout = document.getElementById("layout");
    // create a variable for the bg color using computed style
    const currentBG = getComputedStyle(layout).backgroundColor;

    // check if the current color is white (compare only RGB string)
    if (currentBG === 'rgb(233, 236, 239)')
    {
        // switch back to dark mode
        layout.style.backgroundColor = 'rgb(33, 37, 41)';
        // change the text as well
        layout.style.color = 'rgb(233, 236, 239)';
        // change the buttons style
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('btn-outline-dark');
            button.classList.add('btn-outline-light');
        });

    } 

    // if current color is black
    else if (currentBG === 'rgb(33, 37, 41)') 
    {
        // switch to light mode
        layout.style.backgroundColor = 'rgb(233, 236, 239)';
        // change the text as well
        layout.style.color = 'rgb(33, 37, 41)';
        // change the buttons style
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('btn-outline-light');
            button.classList.add('btn-outline-dark');
        });
    }

    // if the background color is neither white nor black, default to dark mode
    else 
    {

        layout.style.backgroundColor = 'rgb(33, 37, 41)';
        layout.style.color = 'rgb(233, 236, 239)';
        // change the buttons style
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('btn-outline-dark');
            button.classList.add('btn-outline-light');
        });
    }
}