// Fungsi untuk interaksi sederhana (modal, menu toggle)
        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
            const userInfo = document.getElementById('user-info');
            const userModal = document.getElementById('user-modal');
            const closeModal = document.getElementById('close-modal');
            const exploreBtn = document.getElementById('explore-btn');
            const bookNowBtn = document.getElementById('book-now');
            const loadMoreBtn = document.getElementById('load-more');

            // Mobile menu toggle
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.innerHTML = navLinks.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });

            // User modal
            userInfo.addEventListener('click', () => {
                userModal.style.display = 'flex';
            });

            closeModal.addEventListener('click', () => {
                userModal.style.display = 'none';
            });

            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === userModal) {
                    userModal.style.display = 'none';
                }
            });

            // Explore button
            exploreBtn.addEventListener('click', () => {
                document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
            });

            // Book now button
            bookNowBtn.addEventListener('click', () => {
                alert('Fitur pemesanan akan membawa Anda ke halaman pemesanan. Demo ini hanya untuk tampilan UI.');
            });

            // Load more button
            loadMoreBtn.addEventListener('click', () => {
                loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memuat...';
                loadMoreBtn.disabled = true;
                
                // Simulate loading more properties
                setTimeout(() => {
                    alert('Fitur "Lihat Lebih Banyak" akan memuat properti tambahan. Demo ini hanya untuk tampilan UI.');
                    loadMoreBtn.innerHTML = 'Lihat Lebih Banyak <i class="fas fa-plus"></i>';
                    loadMoreBtn.disabled = false;
                }, 1500);
            });

            // Search form submission
            document.querySelector('.search-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const location = document.getElementById('location').value;
                const guests = document.getElementById('guests').value;
                
                alert(`Mencari penginapan di ${location} untuk ${guests} tamu...\n\nFitur pencarian lengkap akan diimplementasikan dengan backend.`);
            });

            // Use location button
            document.querySelectorAll('.btn')[6].addEventListener('click', () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lon = position.coords.longitude;
                            alert(`Lokasi Anda terdeteksi: ${lat.toFixed(4)}, ${lon.toFixed(4)}\n\nSistem akan mencari penginapan terdekat.`);
                        },
                        () => {
                            alert('Izin lokasi ditolak. Silakan masukkan lokasi manual.');
                        }
                    );
                } else {
                    alert('Browser Anda tidak mendukung geolokasi.');
                }
            });
        });