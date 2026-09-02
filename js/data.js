// ==================== DATA BIKERS TOURING INDONESIA ====================

// Data Pengurus Nasional
const pengurusNasionalData = [
    { id: 1, nama: "Ahmad Santoso", jabatan: "Ketua Umum", periode: "2024-2026", foto: null },
    { id: 2, nama: "Budi Wijaya", jabatan: "Wakil Ketua Umum", periode: "2024-2026", foto: null },
    { id: 3, nama: "Citra Dewi", jabatan: "Sekretaris Jenderal", periode: "2024-2026", foto: null },
    { id: 4, nama: "Dedi Kurniawan", jabatan: "Bendahara Umum", periode: "2024-2026", foto: null },
    { id: 5, nama: "Eko Prasetyo", jabatan: "Ketua Bidang Touring", periode: "2024-2026", foto: null },
    { id: 6, nama: "Fajar Nugroho", jabatan: "Ketua Bidang Komunitas", periode: "2024-2026", foto: null },
    { id: 7, nama: "Gita Permata", jabatan: "Ketua Bidang Merchandise", periode: "2024-2026", foto: null },
    { id: 8, nama: "Hadi Sucipto", jabatan: "Ketua Bidang Media", periode: "2024-2026", foto: null }
];

// Data Pengurus Regional
const pengurusRegionalData = [
    { id: 1, nama: "Irfan Maulana", jabatan: "Ketua Regional", periode: "2024-2026", regional: "jawa-timur", foto: null },
    { id: 2, nama: "Joko Susilo", jabatan: "Wakil Ketua Regional", periode: "2024-2026", regional: "jawa-timur", foto: null },
    { id: 3, nama: "Kartika Sari", jabatan: "Sekretaris Regional", periode: "2024-2026", regional: "jawa-timur", foto: null },
    { id: 4, nama: "Lukman Hakim", jabatan: "Ketua Regional", periode: "2024-2026", regional: "jawa-tengah", foto: null },
    { id: 5, nama: "Maya Anggraini", jabatan: "Sekretaris Regional", periode: "2024-2026", regional: "jawa-tengah", foto: null },
    { id: 6, nama: "Nanda Putra", jabatan: "Ketua Regional", periode: "2024-2026", regional: "jawa-barat", foto: null },
    { id: 7, nama: "Oka Wijaya", jabatan: "Ketua Regional", periode: "2024-2026", regional: "bali", foto: null },
    { id: 8, nama: "Putri Lestari", jabatan: "Ketua Regional", periode: "2024-2026", regional: "sumatera-utara", foto: null }
];

// Data Korwil
const korwilData = [
    { id: 1, nama: "Korwil Surabaya", kode: "L", koordinator: "Rudi Hartono", kontak: "+62 812-1111-2222", regional: "jawa-timur", foto: null },
    { id: 2, nama: "Korwil Mojokerto", kode: "S", koordinator: "Siti Aminah", kontak: "+62 812-2222-3333", regional: "jawa-timur", foto: null },
    { id: 3, nama: "Korwil Jombang", kode: "S", koordinator: "Tono Wibowo", kontak: "+62 812-3333-4444", regional: "jawa-timur", foto: null },
    { id: 4, nama: "Korwil Sidoarjo", kode: "W", koordinator: "Umi Kalsum", kontak: "+62 812-4444-5555", regional: "jawa-timur", foto: null },
    { id: 5, nama: "Korwil Semarang", kode: "H", koordinator: "Vino Bastian", kontak: "+62 812-5555-6666", regional: "jawa-tengah", foto: null },
    { id: 6, nama: "Korwil Bandung", kode: "D", koordinator: "Wati Susanti", kontak: "+62 812-6666-7777", regional: "jawa-barat", foto: null },
    { id: 7, nama: "Korwil Denpasar", kode: "DK", koordinator: "Xanana Yusuf", kontak: "+62 812-7777-8888", regional: "bali", foto: null }
];

// Data Komunitas Terdaftar
const komunitasData = [
    { id: 1, nama: "Surabaya Riders Club", kota: "Surabaya", korwil: "Korwil Surabaya", tahun: 2020, logo: null, regional: "jawa-timur" },
    { id: 2, nama: "Mojokerto Bikers", kota: "Mojokerto", korwil: "Korwil Mojokerto", tahun: 2021, logo: null, regional: "jawa-timur" },
    { id: 3, nama: "Jombang Motor Community", kota: "Jombang", korwil: "Korwil Jombang", tahun: 2019, logo: null, regional: "jawa-timur" },
    { id: 4, nama: "Sidoarjo Touring Team", kota: "Sidoarjo", korwil: "Korwil Sidoarjo", tahun: 2022, logo: null, regional: "jawa-timur" },
    { id: 5, nama: "Semarang Motor Club", kota: "Semarang", korwil: "Korwil Semarang", tahun: 2020, logo: null, regional: "jawa-tengah" },
    { id: 6, nama: "Bandung Bikers United", kota: "Bandung", korwil: "Korwil Bandung", tahun: 2021, logo: null, regional: "jawa-barat" },
    { id: 7, nama: "Denpasar Riders", kota: "Denpasar", korwil: "Korwil Denpasar", tahun: 2023, logo: null, regional: "bali" }
];

// Data Agenda
const agendaData = [
    { 
        id: 1, 
        judul: "Touring Nasional Jawa-Bali 2026", 
        tanggal: "15-20 Maret 2026", 
        kategori: "nasional",
        status: "upcoming",
        lokasi: "Jakarta - Surabaya - Denpasar",
        deskripsi: "Touring nasional lintas pulau Jawa dan Bali dengan rute terbaik.",
        cp: "Ahmad Santoso - 0812-3456-7890",
        gambar: null
    },
    { 
        id: 2, 
        judul: "Meetup Regional Jawa Timur", 
        tanggal: "25 Februari 2026", 
        kategori: "regional",
        status: "upcoming",
        lokasi: "Surabaya",
        deskripsi: "Pertemuan rutin pengurus dan anggota regional Jawa Timur.",
        cp: "Irfan Maulana - 0812-1111-2222",
        gambar: null
    },
    { 
        id: 3, 
        judul: "Sunrise Ride Bromo", 
        tanggal: "10 Februari 2026", 
        kategori: "korwil",
        status: "upcoming",
        lokasi: "Gunung Bromo, Probolinggo",
        deskripsi: "Touring menikmati sunrise di Gunung Bromo bersama anggota korwil.",
        cp: "Rudi Hartono - 0812-1111-2222",
        gambar: null
    },
    { 
        id: 4, 
        judul: "Charity Ride Surabaya", 
        tanggal: "5 Februari 2026", 
        kategori: "komunitas",
        status: "upcoming",
        lokasi: "Surabaya",
        deskripsi: "Kegiatan sosial touring sambil berbagi dengan anak yatim.",
        cp: "Rudi Hartono - 0812-1111-2222",
        gambar: null
    },
    { 
        id: 5, 
        judul: "Touring Akhir Tahun 2025", 
        tanggal: "28-30 Desember 2025", 
        kategori: "nasional",
        status: "past",
        lokasi: "Yogyakarta",
        deskripsi: "Touring akhir tahun dengan rute Yogyakarta dan sekitarnya.",
        cp: "Ahmad Santoso - 0812-3456-7890",
        gambar: null
    },
    { 
        id: 6, 
        judul: "Kopdar Bulanan November", 
        tanggal: "15 November 2025", 
        kategori: "regional",
        status: "past",
        lokasi: "Malang",
        deskripsi: "Kopi darat rutin bulanan regional Jawa Timur.",
        cp: "Irfan Maulana - 0812-1111-2222",
        gambar: null
    }
];

// Data Merchandise
const merchandiseData = [
    { 
        id: 1, 
        nama: "Jaket Touring BTI", 
        harga: "Rp 450.000", 
        status: "ready",
        deskripsi: "Jaket touring premium dengan material waterproof.",
        foto: null
    },
    { 
        id: 2, 
        nama: "Kaos BTI Official", 
        harga: "Rp 150.000", 
        status: "open-po",
        deskripsi: "Kaos official BTI dengan bahan cotton combed 30s.",
        foto: null,
        poStart: "1 Feb 2026",
        poEnd: "15 Feb 2026"
    },
    { 
        id: 3, 
        nama: "Topi Snapback BTI", 
        harga: "Rp 120.000", 
        status: "close-po",
        deskripsi: "Topi snapback dengan logo BTI bordir.",
        foto: null
    },
    { 
        id: 4, 
        nama: "Stiker Pack BTI", 
        harga: "Rp 25.000", 
        status: "sold-out",
        deskripsi: "Paket stiker BTI untuk motor dan helm.",
        foto: null
    },
    { 
        id: 5, 
        nama: "Tumbler BTI", 
        harga: "Rp 85.000", 
        status: "ready",
        deskripsi: "Tumbler stainless steel dengan logo BTI.",
        foto: null
    },
    { 
        id: 6, 
        nama: "Sarung Tangan Touring", 
        harga: "Rp 180.000", 
        status: "open-po",
        deskripsi: "Sarung tangan touring dengan proteksi knuckle.",
        foto: null,
        poStart: "5 Feb 2026",
        poEnd: "20 Feb 2026"
    }
];

// Search Data (untuk global search)
const searchData = [
    ...agendaData.map(a => ({ type: 'agenda', title: a.judul, subtitle: a.tanggal, id: a.id })),
    ...merchandiseData.map(m => ({ type: 'merchandise', title: m.nama, subtitle: m.harga, id: m.id })),
    ...pengurusNasionalData.map(p => ({ type: 'pengurus', title: p.nama, subtitle: p.jabatan, id: p.id })),
    ...korwilData.map(k => ({ type: 'korwil', title: k.nama, subtitle: k.koordinator, id: k.id })),
    ...komunitasData.map(k => ({ type: 'komunitas', title: k.nama, subtitle: k.kota, id: k.id }))
];

// Icon mapping untuk search results
const searchIcons = {
    agenda: 'fa-calendar-alt',
    merchandise: 'fa-tshirt',
    pengurus: 'fa-user-tie',
    korwil: 'fa-map-pin',
    komunitas: 'fa-users'
};

// Export untuk modular (jika pakai module)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        pengurusNasionalData,
        pengurusRegionalData,
        korwilData,
        komunitasData,
        agendaData,
        merchandiseData,
        searchData,
        searchIcons
    };
}
