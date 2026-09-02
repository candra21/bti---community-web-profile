// ==================== MAIN JAVASCRIPT ====================

document.addEventListener('DOMContentLoaded', function() {

    // ==================== COUNTER ANIMATION ====================
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString('id-ID');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString('id-ID');
                }
            };

            // Intersection Observer for counter
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }
    animateCounters();

    // ==================== TAB PANEL (Struktur Organisasi) ====================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });

    // ==================== RENDER PENGURUS NASIONAL ====================
    function renderPengurusNasional() {
        const container = document.getElementById('pengurusNasional');
        if (!container || typeof pengurusNasionalData === 'undefined') return;

        container.innerHTML = pengurusNasionalData.map(p => `
            <div class="pengurus-card card-hover">
                <div class="pengurus-img">
                    ${p.foto ? `<img src="${p.foto}" alt="${p.nama}" loading="lazy">` : '<i class="fas fa-user"></i>'}
                </div>
                <div class="pengurus-info">
                    <h4>${p.nama}</h4>
                    <p>${p.jabatan}</p>
                    <span>Periode ${p.periode}</span>
                </div>
            </div>
        `).join('');
    }
    renderPengurusNasional();

    // ==================== RENDER PENGURUS REGIONAL ====================
    function renderPengurusRegional(filter = 'all') {
        const container = document.getElementById('pengurusRegional');
        if (!container || typeof pengurusRegionalData === 'undefined') return;

        const filtered = filter === 'all' 
            ? pengurusRegionalData 
            : pengurusRegionalData.filter(p => p.regional === filter);

        container.innerHTML = filtered.map(p => `
            <div class="pengurus-card card-hover">
                <div class="pengurus-img">
                    ${p.foto ? `<img src="${p.foto}" alt="${p.nama}" loading="lazy">` : '<i class="fas fa-user"></i>'}
                </div>
                <div class="pengurus-info">
                    <h4>${p.nama}</h4>
                    <p>${p.jabatan}</p>
                    <span>${p.regional.replace('-', ' ').toUpperCase()} | ${p.periode}</span>
                </div>
            </div>
        `).join('');
    }
    renderPengurusRegional();

    // Filter Regional
    const filterRegional = document.getElementById('filterRegional');
    if (filterRegional) {
        filterRegional.addEventListener('change', function() {
            renderPengurusRegional(this.value);
        });
    }

    // ==================== RENDER KORWIL ====================
    function renderKorwil(filter = 'all') {
        const container = document.getElementById('korwilGrid');
        if (!container || typeof korwilData === 'undefined') return;

        const filtered = filter === 'all' 
            ? korwilData 
            : korwilData.filter(k => k.regional === filter);

        container.innerHTML = filtered.map(k => `
            <div class="korwil-card card-hover">
                <div class="korwil-header">
                    <div class="korwil-plat">${k.kode}</div>
                    <div>
                        <h4>${k.nama}</h4>
                        <span>${k.regional.replace('-', ' ').toUpperCase()}</span>
                    </div>
                </div>
                <div class="korwil-body">
                    ${k.foto ? `<img src="${k.foto}" alt="${k.koordinator}">` : '<div style="width:40px;height:40px;border-radius:50%;background:var(--gray-200);display:flex;align-items:center;justify-content:center;color:var(--gray-400);"><i class="fas fa-user"></i></div>'}
                    <div class="koordinator-info">
                        <h5>${k.koordinator}</h5>
                        <p><i class="fas fa-phone"></i> ${k.kontak}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    renderKorwil();

    // Filter Korwil Regional
    const filterKorwilRegional = document.getElementById('filterKorwilRegional');
    if (filterKorwilRegional) {
        filterKorwilRegional.addEventListener('change', function() {
            renderKorwil(this.value);
            updateKorwilFilter(this.value);
        });
    }

    function updateKorwilFilter(regional) {
        const korwilSelect = document.getElementById('filterKomunitasKorwil');
        if (!korwilSelect || typeof korwilData === 'undefined') return;

        const filtered = regional === 'all' 
            ? korwilData 
            : korwilData.filter(k => k.regional === regional);

        korwilSelect.innerHTML = '<option value="all">Semua Korwil</option>' + 
            filtered.map(k => `<option value="${k.id}">${k.nama}</option>`).join('');
    }

    // ==================== RENDER KOMUNITAS ====================
    function renderKomunitas(korwilFilter = 'all') {
        const container = document.getElementById('komunitasGrid');
        if (!container || typeof komunitasData === 'undefined') return;

        let filtered = komunitasData;
        if (korwilFilter !== 'all') {
            const selectedKorwil = korwilData.find(k => k.id == korwilFilter);
            if (selectedKorwil) {
                filtered = komunitasData.filter(k => k.korwil === selectedKorwil.nama);
            }
        }

        container.innerHTML = filtered.map(k => `
            <div class="komunitas-card card-hover">
                <div class="komunitas-logo">
                    ${k.logo ? `<img src="${k.logo}" alt="${k.nama}">` : '<i class="fas fa-users"></i>'}
                </div>
                <h4>${k.nama}</h4>
                <div class="komunitas-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${k.kota}</span>
                    <span><i class="fas fa-map-pin"></i> ${k.korwil.replace('Korwil ', '')}</span>
                </div>
                <div class="komunitas-joined">
                    Bergabung sejak <strong>${k.tahun}</strong>
                </div>
            </div>
        `).join('');
    }
    renderKomunitas();

    // Filter Komunitas by Korwil
    const filterKomunitasKorwil = document.getElementById('filterKomunitasKorwil');
    if (filterKomunitasKorwil) {
        filterKomunitasKorwil.addEventListener('change', function() {
            renderKomunitas(this.value);
        });
    }

    // ==================== RENDER AGENDA ====================
    function renderAgenda(type = 'upcoming', category = 'all') {
        const container = document.getElementById('agendaGrid');
        if (!container || typeof agendaData === 'undefined') return;

        let filtered = agendaData.filter(a => a.status === type);

        if (category !== 'all') {
            filtered = filtered.filter(a => a.kategori === category);
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="grid-column: 1/-1; padding: 3rem;">
                    <i class="fas fa-calendar-times" style="font-size: 3rem; color: var(--gray-300); margin-bottom: 1rem;"></i>
                    <p style="color: var(--gray-400);">Tidak ada agenda ${type === 'upcoming' ? 'yang akan datang' : 'yang sudah terlaksana'}.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(a => `
            <div class="agenda-card card-hover">
                <div class="agenda-img">
                    ${a.gambar ? `<img src="${a.gambar}" alt="${a.judul}" loading="lazy">` : '<i class="fas fa-calendar-alt"></i>'}
                    <span class="agenda-badge ${a.kategori}">${a.kategori.toUpperCase()}</span>
                </div>
                <div class="agenda-content">
                    <div class="agenda-date">
                        <i class="fas fa-calendar"></i>
                        <span>${a.tanggal}</span>
                    </div>
                    <h3>${a.judul}</h3>
                    <div class="agenda-meta">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${a.lokasi}</span>
                    </div>
                    <a href="pages/detail/agenda-detail.html?id=${a.id}" class="agenda-cta">
                        ${type === 'upcoming' ? '<i class="fas fa-ticket-alt"></i> Ikuti Event' : '<i class="fas fa-images"></i> Lihat Dokumentasi'}
                    </a>
                </div>
            </div>
        `).join('');
    }
    renderAgenda();

    // Agenda Tabs
    const agendaTabs = document.querySelectorAll('.agenda-tab');
    let currentAgendaType = 'upcoming';
    let currentAgendaCategory = 'all';

    agendaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            currentAgendaType = this.getAttribute('data-agenda');
            agendaTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderAgenda(currentAgendaType, currentAgendaCategory);
        });
    });

    // Agenda Filter Chips
    const filterChips = document.querySelectorAll('.chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            currentAgendaCategory = this.getAttribute('data-filter');
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            renderAgenda(currentAgendaType, currentAgendaCategory);
        });
    });

    // ==================== RENDER MERCHANDISE ====================
    function renderMerchandise() {
        const container = document.getElementById('merchGrid');
        if (!container || typeof merchandiseData === 'undefined') return;

        const statusLabels = {
            'ready': 'Ready',
            'open-po': 'Open PO',
            'close-po': 'Close PO',
            'sold-out': 'Sold Out'
        };

        container.innerHTML = merchandiseData.map(m => `
            <div class="merch-card card-hover">
                <div class="merch-img">
                    ${m.foto ? `<img src="${m.foto}" alt="${m.nama}" loading="lazy">` : '<i class="fas fa-tshirt"></i>'}
                    <span class="merch-status ${m.status}">${statusLabels[m.status]}</span>
                </div>
                <div class="merch-info">
                    <h3>${m.nama}</h3>
                    <div class="merch-price">${m.harga}</div>
                </div>
            </div>
        `).join('');
    }
    renderMerchandise();

    // ==================== SCROLL REVEAL ====================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.section-header, .pengurus-card, .korwil-card, .komunitas-card, .agenda-card, .merch-card, .visi-card, .misi-card');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            revealObserver.observe(el);
        });
    }
    initScrollReveal();

    // ==================== FORM VALIDATION HELPERS ====================
    window.validateForm = function(form) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            const formGroup = field.closest('.form-group');
            const errorEl = formGroup ? formGroup.querySelector('.form-error') : null;

            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--danger)';
                if (errorEl) {
                    errorEl.textContent = 'Field ini wajib diisi';
                    errorEl.style.display = 'flex';
                }
            } else {
                field.style.borderColor = '';
                if (errorEl) {
                    errorEl.style.display = 'none';
                }
            }
        });

        return isValid;
    };

    // ==================== UTILITY FUNCTIONS ====================
    window.formatRupiah = function(angka) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    window.formatDate = function(date) {
        return new Intl.DateTimeFormat('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(date));
    };

    // ==================== CMS EDITABLE (Admin Preview) ====================
    document.querySelectorAll('.cms-editable').forEach(el => {
        el.addEventListener('dblclick', function() {
            // Simulasi edit mode - dalam implementasi nyata, ini akan membuka editor
            console.log('CMS Edit mode:', this.getAttribute('data-cms'));
        });
    });

});
