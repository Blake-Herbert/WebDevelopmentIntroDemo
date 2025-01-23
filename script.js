function toggle() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    const containers = [container1, container2, container3];

    containers.forEach(container => {
        container.classList.toggle("container");
    });
    
    const bigContainer = document.getElementById("bigContainer");
    bigContainer.classList.toggle("bigContainer");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.classList.toggle("button");
    });

    console.log("Hello World!");
}

toggle();