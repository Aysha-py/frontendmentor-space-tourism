let barsButton = document.getElementById("bars-button");
let navList = document.getElementById("navDisplay")

let display = barsButton.addEventListener('click', function () {
    if (navList.style.display === "none") {
        navList.style.display = "block";
        barsButton.innerHTML = `<i class="fas fa-times"></i>`

    }
    else {
        navList.style.display = "none";
        barsButton.innerHTML = "";

    }
})
