document.getElementById('submit').addEventListener('click', function () {
    const form = document.getElementById('newsletter-form');
    const successModal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close');
    let all = document.querySelector('.box')

    all.classList.add('hidden')
    // Hide the form and show the modal
    form.classList.add('hidden');
    successModal.classList.remove('hidden');

    // Close the modal on click
    closeBtn.onclick = function () {
        successModal.classList.add('hidden');
    };

    // Close the modal if user clicks outside of it
    window.onclick = function (event) {
        if (event.target === successModal) {
            successModal.classList.add('hidden');
        }
    };
});
