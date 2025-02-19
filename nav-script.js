        const links = document.querySelectorAll('.dropdown-content a');
        const contentDivs = document.querySelectorAll('#content > .content-section');
 
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                contentDivs.forEach(div => div.style.display = 'none');
                document.getElementById(targetId).style.display = 'block';
            });
        });

        // Load section based on URL hash or set a default section
        const defaultSectionId = window.location.hash ? window.location.hash.substring(1) : 'home';
        contentDivs.forEach(div => div.style.display = 'none');
        document.getElementById(defaultSectionId).style.display = 'block';
