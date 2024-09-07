document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.getAttribute('data-content');
            modalText.innerHTML = `Content for ${content}`;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
