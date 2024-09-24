document.addEventListener("DOMContentLoaded", () => {
    let home = document.querySelectorAll(".homebtn");
    home.forEach(button=>{
        button.addEventListener("click",()=>{
            window.location.href="index.html"
        })
    })

    // Use querySelectorAll which returns a NodeList
    let watBtn = document.querySelectorAll(".watt");

    // Loop through each element in the NodeList
    watBtn.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "https://wa.me/6303196012";
        });
    });
});



        