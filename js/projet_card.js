// Visibilité des cards
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); 
        }
    });
}, { threshold: 0.4});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Pop up 
const buttons = document.querySelectorAll("button.learn-more");
buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
   
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
