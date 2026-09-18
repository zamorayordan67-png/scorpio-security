const button = document.getElementById("button");
const title = document.getElementById("title");
const text = document.getElementById("text");

button.addEventListener("click", function() {

    title.textContent = "Hello Yordan!";
    text.textContent = "You changed the page using JavaScript.";

});