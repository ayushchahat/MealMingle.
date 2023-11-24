// script.js

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        const offset = section.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

// for read-mode sectin in about section
function toggleAboutContent() {
    const limitedContent = document.getElementById('about-content');
    const expandedContent = document.getElementById('expanded-content');
    const readMoreBtn = document.querySelector('.read-more');
    const readLessBtn = document.querySelector('.read-less');

    if (limitedContent.classList.contains('limited')) {
        limitedContent.classList.remove('limited');
        expandedContent.classList.add('expanded');
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline';
    } else {
        limitedContent.classList.add('limited');
        expandedContent.classList.remove('expanded');
        readMoreBtn.style.display = 'inline';
        readLessBtn.style.display = 'none';
    }
}



// Add event listeners for each quick link
document.getElementById('quick-link-home').addEventListener('click', function() {
    scrollToSection('home');
});

document.getElementById('quick-link-about').addEventListener('click', function() {
    scrollToSection('about');
});

document.getElementById('quick-link-contacts').addEventListener('click', function() {
    scrollToSection('contact');
});