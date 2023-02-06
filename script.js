// declare variables 
const hamburger_menu = document.getElementById("hamburger_menu");
const mobile_nav = document.getElementById("mobile_nav");
const close_button = document.getElementById("close_button");
const even_item = document.getElementById("even_item");



// reveal nav when hamburger is clicked 
hamburger_menu.addEventListener('click', (e) => {
    e.preventDefault;
    mobile_nav.classList.toggle('reveal_nav');
    close_button.classList.toggle('show');
})

// close nav when close button is clicked
function close_mobile_nav() {
    mobile_nav.classList.toggle('reveal_nav');
    close_button.classList.toggle('show');
}



