document.getElementById('moreBtn').addEventListener('click', function() {
    var aboutSection = document.getElementById('aboutSection');
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        aboutSection.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
