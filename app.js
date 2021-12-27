let barsButton = document.getElementById("bars-button");
let navList = document.getElementById("navDisplay")

let display = barsButton.addEventListener('click', function () {
    if (navList.style.display === "none") {
        navList.style.display = "block";
        barsButton.innerHTML = `<img src="img/icon-close.svg" alt="">`

    }
    else {
        navList.style.display = "none";
        barsButton.innerHTML = `<img src="img/icon-hamburger.svg" alt="">`;

    }



})
