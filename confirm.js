// confirm.js - JavaScript untuk halaman konfirmasi
document.addEventListener('DOMContentLoaded', function() {
    console.log('Confirmation page loaded');
    
    // ==================== LOAD BOOKING DATA ====================
    function loadBookingData() {
        try {
            // Coba ambil data dari localStorage
            const bookingData = JSON.parse(localStorage.getItem('last_booking'));
            const urlParams = new URLSearchParams(window.location.search);
            const bookingId = urlParams.get('bookingId');
            
            console.log('Booking data from localStorage:', bookingData);
            console.log('Booking ID from URL:', bookingId);
            
            // Jika ada data booking, update UI
            if (bookingData) {
                updateBookingDetails(bookingData);
            } else {
                // Jika tidak ada data, generate dummy data untuk demo
                generateDemoData();
            }
            
        } catch (error) {
            console.error('Error loading booking data:', error);
            generateDemoData(); // Fallback ke data demo
        }
    }
    
    function updateBookingDetails(booking) {
        // Format tanggal
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        // Format harga
        function formatPrice(price) {
            return 'Rp ' + price.toLocaleString('id-ID');
        }
        
        // Update booking details
        const details = [
            { selector: '.detail-item:nth-child(1) .detail-value', value: booking.customerName || 'Akmalia Ciety' },
            { selector: '.detail-item:nth-child(2) .detail-value', value: booking.propertyName || 'Hotel Grand Luxury' },
            { selector: '.detail-item:nth-child(3) .detail-value', value: booking.roomType || 'Kamar Deluxe' },
            { selector: '.detail-item:nth-child(4) .detail-value', value: booking.checkin ? formatDate(booking.checkin) : '15 Desember 2023' },
            { selector: '.detail-item:nth-child(5) .detail-value', value: booking.checkout ? formatDate(booking.checkout) : '20 Desember 2023' },
            { selector: '.detail-item:nth-child(6) .detail-value', value: `${booking.nights || 5} Malam` },
            { selector: '.detail-item:nth-child(7) .detail-value', value: `${booking.guests || 2} Orang` },
            { selector: '.detail-item:nth-child(8) .detail-value', value: booking.totalPrice ? formatPrice(booking.totalPrice) : 'Rp 4.275.000' }
        ];
        
        details.forEach(detail => {
            const element = document.querySelector(detail.selector);
            if (element) {
                element.textContent = detail.value;
            }
        });
        
        // Update booking ID jika ada
        if (booking.id) {
            const bookingIdElement = document.querySelector('.id-value');
            if (bookingIdElement) {
                bookingIdElement.textContent = 'SW' + booking.id;
            }
        }
        
        // Update hotel info di rating section
        if (booking.propertyName) {
            const hotelNameElement = document.querySelector('.hotel-details h3');
            if (hotelNameElement) {
                hotelNameElement.textContent = booking.propertyName;
            }
        }
        
        if (booking.propertyLocation) {
            const hotelLocationElement = document.querySelector('.hotel-location span');
            if (hotelLocationElement) {
                hotelLocationElement.textContent = booking.propertyLocation;
            }
        }
    }
    
    function generateDemoData() {
        console.log('Using demo booking data');
        // Data demo akan digunakan secara otomatis dari HTML
    }
    
    // ==================== RATING SYSTEM ====================
    function setupRatingSystem() {
        // Overall rating stars
        const stars = document.querySelectorAll('.star');
        const ratingValue = document.getElementById('rating-value');
        let currentRating = 0;
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const value = parseInt(this.getAttribute('data-value'));
                currentRating = value;
                
                // Update stars display
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.add('active');
                        s.innerHTML = '<i class="fas fa-star"></i>';
                    } else {
                        s.classList.remove('active');
                        s.innerHTML = '<i class="far fa-star"></i>';
                    }
                });
                
                // Update rating value display
                if (ratingValue) {
                    ratingValue.textContent = value;
                }
            });
            
            // Hover effect
            star.addEventListener('mouseenter', function() {
                const value = parseInt(this.getAttribute('data-value'));
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.innerHTML = '<i class="fas fa-star"></i>';
                    }
                });
            });
            
            star.addEventListener('mouseleave', function() {
                stars.forEach((s, index) => {
                    if (!s.classList.contains('active') && index >= currentRating) {
                        s.innerHTML = '<i class="far fa-star"></i>';
                    }
                });
            });
        });
        
        // Category rating stars
        const catStars = document.querySelectorAll('.cat-star');
        catStars.forEach(star => {
            star.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                const value = parseInt(this.getAttribute('data-value'));
                
                // Update stars for this category
                const categoryStars = document.querySelectorAll(`.cat-star[data-category="${category}"]`);
                categoryStars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.add('active');
                        s.innerHTML = '<i class="fas fa-star"></i>';
                    } else {
                        s.classList.remove('active');
                        s.innerHTML = '<i class="far fa-star"></i>';
                    }
                });
            });
        });
        
        // Character counter for review textarea
        const reviewTextarea = document.getElementById('review');
        const charCount = document.getElementById('char-count');
        
        if (reviewTextarea && charCount) {
            reviewTextarea.addEventListener('input', function() {
                const length = this.value.length;
                charCount.textContent = length;
                
                // Add warning if approaching limit
                if (length > 450) {
                    charCount.style.color = '#ff6b6b';
                } else if (length > 400) {
                    charCount.style.color = '#ffc145';
                } else {
                    charCount.style.color = 'var(--gray)';
                }
                
                // Limit to 500 characters
                if (length > 500) {
                    this.value = this.value.substring(0, 500);
                    charCount.textContent = 500;
                }
            });
        }
        
        // Photo upload functionality
        const uploadArea = document.getElementById('upload-area');
        const photoUpload = document.getElementById('photo-upload');
        const previewContainer = document.getElementById('preview-container');
        let uploadedPhotos = [];
        
        if (uploadArea && photoUpload) {
            // Click on upload area triggers file input
            uploadArea.addEventListener('click', function() {
                photoUpload.click();
            });
            
            // Drag and drop functionality
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.borderColor = 'var(--primary)';
                this.style.backgroundColor = 'rgba(74, 144, 226, 0.1)';
            });
            
            uploadArea.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = '#f8f9fa';
            });
            
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.borderColor = '#ddd';
                this.style.backgroundColor = '#f8f9fa';
                
                const files = e.dataTransfer.files;
                handleFiles(files);
            });
            
            // File input change
            photoUpload.addEventListener('change', function(e) {
                handleFiles(this.files);
            });
            
            function handleFiles(files) {
                // Reset if more than 5 files
                if (uploadedPhotos.length + files.length > 5) {
                    alert('Maksimum 5 foto yang dapat diupload');
                    return;
                }
                
                for (let i = 0; i < files.length && uploadedPhotos.length < 5; i++) {
                    const file = files[i];
                    
                    // Check file type
                    if (!file.type.match('image.*')) {
                        alert('Hanya file gambar yang diperbolehkan (JPG, PNG)');
                        continue;
                    }
                    
                    // Check file size (max 5MB)
                    if (file.size > 5 * 1024 * 1024) {
                        alert('Ukuran file maksimal 5MB');
                        continue;
                    }
                    
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        // Add to uploaded photos array
                        uploadedPhotos.push({
                            name: file.name,
                            dataUrl: e.target.result
                        });
                        
                        // Update preview
                        updatePreview();
                    };
                    
                    reader.readAsDataURL(file);
                }
            }
            
            function updatePreview() {
                previewContainer.innerHTML = '';
                
                uploadedPhotos.forEach((photo, index) => {
                    const previewDiv = document.createElement('div');
                    previewDiv.className = 'preview-item';
                    previewDiv.style.position = 'relative';
                    previewDiv.style.display = 'inline-block';
                    previewDiv.style.margin = '5px';
                    
                    const img = document.createElement('img');
                    img.src = photo.dataUrl;
                    img.className = 'preview-image';
                    img.style.width = '100px';
                    img.style.height = '100px';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '8px';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    removeBtn.style.position = 'absolute';
                    removeBtn.style.top = '-5px';
                    removeBtn.style.right = '-5px';
                    removeBtn.style.background = '#ff6b6b';
                    removeBtn.style.color = 'white';
                    removeBtn.style.border = 'none';
                    removeBtn.style.borderRadius = '50%';
                    removeBtn.style.width = '25px';
                    removeBtn.style.height = '25px';
                    removeBtn.style.cursor = 'pointer';
                    removeBtn.style.fontSize = '0.8rem';
                    removeBtn.style.display = 'flex';
                    removeBtn.style.alignItems = 'center';
                    removeBtn.style.justifyContent = 'center';
                    
                    removeBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        uploadedPhotos.splice(index, 1);
                        updatePreview();
                    });
                    
                    previewDiv.appendChild(img);
                    previewDiv.appendChild(removeBtn);
                    previewContainer.appendChild(previewDiv);
                });
                
                // Update upload area text if photos exist
                if (uploadedPhotos.length > 0) {
                    uploadArea.innerHTML = `
                        <i class="fas fa-images"></i>
                        <p>${uploadedPhotos.length} foto terupload. Klik untuk tambah lagi</p>
                        <p class="upload-note">Maksimum ${5 - uploadedPhotos.length} foto tersisa</p>
                    `;
                } else {
                    uploadArea.innerHTML = `
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Drag & drop foto atau <span class="browse-text">browse</span></p>
                        <p class="upload-note">Maksimum 5 foto, format JPG/PNG</p>
                    `;
                }
            }
        }
        
        // Rating form submission
        const ratingForm = document.getElementById('rating-form');
        if (ratingForm) {
            ratingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect rating data
                const overallRating = currentRating;
                const reviewText = document.getElementById('review').value;
                
                // Collect category ratings
                const categoryRatings = {};
                const categories = ['cleanliness', 'comfort', 'service', 'location'];
                
                categories.forEach(category => {
                    const activeStars = document.querySelectorAll(`.cat-star[data-category="${category}"].active`);
                    categoryRatings[category] = activeStars.length;
                });
                
                // Create rating object
                const ratingData = {
                    overallRating: overallRating,
                    categoryRatings: categoryRatings,
                    review: reviewText,
                    photos: uploadedPhotos,
                    timestamp: new Date().toISOString(),
                    propertyId: localStorage.getItem('last_property_id') || '1',
                    bookingId: new URLSearchParams(window.location.search).get('bookingId') || Date.now()
                };
                
                // Save to localStorage
                saveRating(ratingData);
                
                // Show success message
                showRatingSuccess();
                
                // Update leaderboard points
                updateLeaderboardPoints();
            });
        }
        
        // Skip rating button
        const skipRatingBtn = document.getElementById('skip-rating');
        if (skipRatingBtn) {
            skipRatingBtn.addEventListener('click', function() {
                if (confirm('Anda yakin ingin melewatkan rating? Anda dapat memberikan rating nanti.')) {
                    // Save empty rating data
                    const ratingData = {
                        skipped: true,
                        timestamp: new Date().toISOString()
                    };
                    
                    saveRating(ratingData);
                    
                    // Hide rating section
                    document.getElementById('rating-section').style.display = 'none';
                    
                    // Show message
                    alert('Rating dilewatkan. Terima kasih telah memesan!');
                }
            });
        }
    }
    
    function saveRating(ratingData) {
        try {
            // Get existing ratings or create new array
            const ratings = JSON.parse(localStorage.getItem('sleepwell_ratings') || '[]');
            
            // Add new rating
            ratings.push(ratingData);
            
            // Save back to localStorage
            localStorage.setItem('sleepwell_ratings', JSON.stringify(ratings));
            
            console.log('Rating saved:', ratingData);
            return true;
            
        } catch (error) {
            console.error('Error saving rating:', error);
            return false;
        }
    }
    
    function showRatingSuccess() {
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.className = 'rating-success';
        successMsg.innerHTML = `
            <div style="text-align: center; padding: 30px; background: #d4edda; border-radius: 10px; border: 1px solid #c3e6cb; color: #155724; margin: 20px 0;">
                <i class="fas fa-check-circle fa-2x" style="margin-bottom: 15px;"></i>
                <h3 style="margin-bottom: 10px;">Rating Terkirim!</h3>
                <p>Terima kasih telah berbagi pengalaman Anda. Rating Anda membantu pengguna lain.</p>
                <p style="margin-top: 15px; font-size: 0.9rem;">+10 poin leaderboard telah ditambahkan!</p>
            </div>
        `;
        
        // Insert before rating form
        const ratingForm = document.getElementById('rating-form');
        if (ratingForm) {
            ratingForm.parentNode.insertBefore(successMsg, ratingForm);
            
            // Hide form
            ratingForm.style.display = 'none';
            
            // Hide skip button
            const skipBtn = document.getElementById('skip-rating');
            if (skipBtn) skipBtn.style.display = 'none';
        }
    }
    
    function updateLeaderboardPoints() {
        try {
            // Get current points from localStorage
            let points = parseInt(localStorage.getItem('sleepwell_user_points')) || 0;
            
            // Add 10 points for rating
            points += 10;
            
            // Save back
            localStorage.setItem('sleepwell_user_points', points.toString());
            
            console.log('Leaderboard points updated:', points);
            
        } catch (error) {
            console.error('Error updating leaderboard points:', error);
        }
    }
    
    // ==================== OTHER FUNCTIONALITY ====================
    function setupOtherFunctionality() {
        // Download receipt button
        const downloadBtn = document.getElementById('download-receipt');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function() {
                alert('Fitur download invoice akan segera tersedia. Untuk saat ini, silakan screenshot halaman ini sebagai bukti pemesanan.');
                
                // Simulate download (demo only)
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengunduh...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Invoice Terunduh';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-download"></i> Download Invoice';
                        this.disabled = false;
                    }, 2000);
                }, 1500);
            });
        }
        
        // Back to home button
        const backHomeBtn = document.getElementById('btn-back-beranda');
        if (backHomeBtn) {
            backHomeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add animation
                this.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 300);
            });
        }
    }
    
    // ==================== INITIALIZATION ====================
    function init() {
        console.log('Initializing confirmation page...');
        
        // Load booking data
        loadBookingData();
        
        // Setup rating system
        setupRatingSystem();
        
        // Setup other functionality
        setupOtherFunctionality();
        
        console.log('Confirmation page initialized');
    }
    
    // Start initialization
    init();
});