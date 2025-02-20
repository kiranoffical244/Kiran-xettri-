document.addEventListener("DOMContentLoaded", function() {

    let popup = document.getElementById("popup");

    let closeBtn = document.getElementById("closePopup");

    // Auto hide popup after 3 seconds

    setTimeout(function() {

        popup.style.animation = "fadeOut 0.5s ease-in-out";

        setTimeout(() => popup.style.display = "none", 500);

    }, 3000);

    // Close button functionality

    closeBtn.addEventListener("click", function() {

        popup.style.animation = "fadeOut 0.5s ease-in-out";

        setTimeout(() => popup.style.display = "none", 500);

    });

});