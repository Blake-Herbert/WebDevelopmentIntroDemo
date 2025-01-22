function toggle() {
    const container1 = document.getElementById("container");
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");
    const bigContainer = document.getElementById("bigContainer");
    
    container1.classList.toggle("container");
    container2.classList.toggle("container");
    container3.classList.toggle("container");
    bigContainer.classList.toggle("bigContainer");

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.classList.toggle("button");
    button2.classList.toggle("button");
    button3.classList.toggle("button");


    console.log("Hello World!");
}