const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        const box = e.target.closest('.faq');
        box.classList.toggle('active');
    })
})