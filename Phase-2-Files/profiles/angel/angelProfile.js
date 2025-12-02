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

        // change the cards colors
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = 'rgb(33, 37, 41)';
            card.style.color = 'rgb(255, 255, 255)';
        });

        // change the skills list colors
        document.querySelectorAll('.skills .list-group-item').forEach(item => {
            item.classList.remove('list-group-item-light');
            item.classList.add('list-group-item-dark');
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
        // change the cards colors
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = 'rgb(255, 255, 255)';
            card.style.color = 'rgb(33, 37, 41)';
        });

        // change the skills list colors
        document.querySelectorAll('.skills .list-group-item').forEach(item => {
            item.classList.remove('list-group-item-dark');
            item.classList.add('list-group-item-light');
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
