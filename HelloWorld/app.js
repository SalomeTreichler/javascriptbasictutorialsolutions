let paragraph = document.getElementById("hello-world");
let button = document.getElementById("button");

button.addEventListener('click', function (e) {
    e.preventDefault();
    //Console log for button clicked
    console.log("Button has been clicked");
    //Display Hello World in paragraph tag
    paragraph.innerHTML = "Hello World";  
});