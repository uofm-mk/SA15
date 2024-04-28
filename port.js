
document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project modals
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Display modal for the clicked project
            const modalId = this.getAttribute('id') + '-modal';
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';

            // Close modal when clicking outside
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            };
        });
    });

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        
        const formData = new FormData(this);
        formData.forEach((value, key) => {
            console.log(key, value);
        });
    });
});
