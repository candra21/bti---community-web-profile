// ==================== NAVIGATION & HEADER ====================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const searchToggle = document.getElementById('searchToggle');
    const searchBar = document.getElementById('searchBar');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1024) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Search toggle
    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', function() {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                setTimeout(() => searchInput.focus(), 100);
            }
        });
    }

    // Search close
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchBar.classList.remove('active');
            searchResults.classList.remove('active');
            searchInput.value = '';
        });
    }

    // Close search on outside click
    document.addEventListener('click', function(e) {
        if (searchBar && !searchBar.contains(e.target) && !searchToggle.contains(e.target)) {
            searchBar.classList.remove('active');
            searchResults.classList.remove('active');
        }
    });

    // Search functionality
    if (searchInput && searchResults && typeof searchData !== 'undefined') {
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.toLowerCase().trim();

            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }

            searchTimeout = setTimeout(() => {
                const results = searchData.filter(item => 
                    item.title.toLowerCase().includes(query) || 
                    item.subtitle.toLowerCase().includes(query)
                ).slice(0, 8);

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(item => `
                        <div class="search-result-item" onclick="location.href='#'">
                            <i class="fas ${searchIcons[item.type] || 'fa-search'}"></i>
                            <div>
                                <div style="font-weight: 600; color: #062A42; font-size: 0.9rem;">${item.title}</div>
                                <div style="font-size: 0.8rem; color: #94a3b8;">${item.subtitle}</div>
                            </div>
                        </div>
                    `).join('');
                    searchResults.classList.add('active');
                } else {
                    searchResults.innerHTML = `
                        <div class="search-result-item" style="justify-content: center; color: #94a3b8;">
                            <i class="fas fa-search" style="background: transparent;"></i>
                            <span>Tidak ada hasil untuk "${query}"</span>
                        </div>
                    `;
                    searchResults.classList.add('active');
                }
            }, 300);
        });

        // Close search on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchBar.classList.remove('active');
                searchResults.classList.remove('active');
                searchInput.value = '';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + header.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
});
