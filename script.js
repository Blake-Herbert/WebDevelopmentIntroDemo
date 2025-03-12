function toggle() {
    const body = document.querySelector("body");
    const containers = document.querySelectorAll(".container");
    const buttons = document.querySelectorAll("button");
    
    body.classList.toggle("active");

    containers.forEach(container => {
        container.classList.toggle("active");
    });

    buttons.forEach(button => {
        button.classList.toggle("active");
    });

    console.log("Hello World!"); // This is here to demonstrate the browser dev tools console
}