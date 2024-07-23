document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset as needed
                behavior: 'smooth'
            });
        });
    });
});
// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var img = document.getElementById("profileImage");
var modalImg = document.getElementById("fullImage");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
