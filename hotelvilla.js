// hotelvilla.js - JavaScript untuk halaman hotel & villa
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hotel & Villa page loaded');
    
    // Initialize wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('sleepwell_wishlist')) || [];
    console.log('Wishlist loaded:', wishlist);
    
    // Update semua tombol wishlist dengan status dari localStorage
    updateAllWishlistButtons();
    
    // Setup event listener untuk tombol wishlist
    setupWishlistListeners();
    
    // Setup event listener untuk tombol pesan
    setupBookingListeners();
    
    // Setup event listener untuk tombol quick actions
    setupQuickActions();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // Search button functionality
    setupSearchButton();
    
    // Filter and sort functionality
    setupFilterSort();
    
    // Initialize wishlist count
    updateWishlistCount();
    
    console.log('Hotel & Villa page initialized');
});

// Function to update all wishlist buttons based on localStorage
function updateAllWishlistButtons() {
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    
    wishlistButtons.forEach(button => {
        const propertyCard = button.closest('.property-card');
        if (!propertyCard) return;
        
        const propertyTitle = propertyCard.querySelector('.property-title').textContent;
        
        // Check if this property is in wishlist
        const isInWishlist = wishlist.some(item => item.name === propertyTitle);
        
        // Update button appearance
        const icon = button.querySelector('i');
        if (isInWishlist) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            button.style.color = '#ff6b6b';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            button.style.color = '';
        }
    });
}

// Function to setup wishlist listeners
function setupWishlistListeners() {
    document.addEventListener('click', function(e) {
        // Check if wishlist button was clicked
        if (e.target.closest('.wishlist-btn') || e.target.closest('.wishlist-btn i')) {
            e.preventDefault();
            e.stopPropagation();
            
            const wishlistBtn = e.target.closest('.wishlist-btn');
            const propertyCard = wishlistBtn.closest('.property-card');
            
            if (!propertyCard) return;
            
            // Get property details
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            const propertyLocation = propertyCard.querySelector('.property-location span').textContent;
            const propertyPriceElement = propertyCard.querySelector('.property-price');
            const propertyImage = propertyCard.querySelector('.property-img').src;
            
            // Get price (handle both regular and discounted prices)
            let propertyPrice = propertyPriceElement.textContent;
            const currentPriceElement = propertyCard.querySelector('.current-price');
            if (currentPriceElement) {
                propertyPrice = currentPriceElement.textContent;
            }
            
            // Get the icon
            const icon = wishlistBtn.querySelector('i');
            const isCurrentlyInWishlist = icon.classList.contains('fas');
            
            // Toggle wishlist status
            if (isCurrentlyInWishlist) {
                // Remove from wishlist
                removeFromWishlist(propertyTitle);
                icon.classList.remove('fas');
                icon.classList.add('far');
                wishlistBtn.style.color = '';
                
                // Show notification
                showNotification(`"${propertyTitle}" dihapus dari wishlist`, 'info');
            } else {
                // Add to wishlist
                addToWishlist({
                    name: propertyTitle,
                    location: propertyLocation,
                    price: propertyPrice.trim(),
                    image: propertyImage,
                    dateAdded: new Date().toISOString()
                });
                icon.classList.remove('far');
                icon.classList.add('fas');
                wishlistBtn.style.color = '#ff6b6b';
                
                // Show notification with animation
                showNotification(`"${propertyTitle}" ditambahkan ke wishlist`, 'success');
                
                // Add animation to button
                wishlistBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    wishlistBtn.style.transform = 'scale(1)';
                }, 300);
            }
        }
    });
}

// Function to add item to wishlist
function addToWishlist(property) {
    let wishlist = JSON.parse(localStorage.getItem('sleepwell_wishlist')) || [];
    
    // Check if already in wishlist
    if (!wishlist.some(item => item.name === property.name)) {
        // Add to wishlist array
        wishlist.push(property);
        
        // Save to localStorage
        localStorage.setItem('sleepwell_wishlist', JSON.stringify(wishlist));
        
        // Update wishlist count badge
        updateWishlistCount();
        
        console.log('Added to wishlist:', property.name);
    }
}

// Function to remove item from wishlist
function removeFromWishlist(propertyName) {
    let wishlist = JSON.parse(localStorage.getItem('sleepwell_wishlist')) || [];
    
    // Remove from wishlist array
    wishlist = wishlist.filter(item => item.name !== propertyName);
    
    // Save to localStorage
    localStorage.setItem('sleepwell_wishlist', JSON.stringify(wishlist));
    
    // Update wishlist count badge
    updateWishlistCount();
    
    console.log('Removed from wishlist:', propertyName);
}

// Function to update wishlist count badge
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('sleepwell_wishlist')) || [];
    const wishlistCount = wishlist.length;
    
    // Update the wishlist button in quick actions
    const wishlistBtn = document.querySelector('.recommendation-btn');
    if (wishlistBtn) {
        // Remove existing badge if any
        const existingBadge = wishlistBtn.querySelector('.wishlist-count-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        // Add new badge if there are items
        if (wishlistCount > 0) {
            const badge = document.createElement('span');
            badge.className = 'wishlist-count-badge';
            badge.textContent = wishlistCount;
            badge.style.position = 'absolute';
            badge.style.top = '-8px';
            badge.style.right = '-8px';
            badge.style.background = '#ff6b6b';
            badge.style.color = 'white';
            badge.style.borderRadius = '50%';
            badge.style.width = '20px';
            badge.style.height = '20px';
            badge.style.fontSize = '0.7rem';
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.fontWeight = 'bold';
            
            wishlistBtn.style.position = 'relative';
            wishlistBtn.appendChild(badge);
        }
    }
}

// Function to setup booking listeners
function setupBookingListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('#btn-pesan') || e.target.closest('#btn-pesan i')) {
            e.preventDefault();
            
            const bookingBtn = e.target.closest('#btn-pesan');
            const propertyCard = bookingBtn.closest('.property-card');
            
            if (!propertyCard) return;
            
            // Get property details
            const propertyTitle = propertyCard.querySelector('.property-title').textContent;
            const propertyLocation = propertyCard.querySelector('.property-location span').textContent;
            const propertyPriceElement = propertyCard.querySelector('.property-price');
            
            // Get price (handle both regular and discounted prices)
            let propertyPrice = propertyPriceElement.textContent;
            const currentPriceElement = propertyCard.querySelector('.current-price');
            if (currentPriceElement) {
                propertyPrice = currentPriceElement.textContent;
            }
            
            // Extract numeric price
            const priceMatch = propertyPrice.match(/Rp\s*([\d.,]+)/);
            const price = priceMatch ? priceMatch[1].replace(/\./g, '') : '1000000';
            
            // Save property data to localStorage for booking page
            localStorage.setItem('selected_property_name', propertyTitle);
            localStorage.setItem('selected_property_location', propertyLocation);
            localStorage.setItem('selected_property_price', price);
            
            // Show loading animation
            const originalText = bookingBtn.innerHTML;
            bookingBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
            bookingBtn.disabled = true;
            
            // Simulate processing delay
            setTimeout(() => {
                // Redirect to booking page
                window.location.href = 'booking.html';
            }, 800);
        }
    });
}

// Function to setup quick actions
function setupQuickActions() {
    // Gunakan Lokasi Saya button
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.addEventListener('click', function() {
            if (navigator.geolocation) {
                showNotification('Mendeteksi lokasi Anda...', 'info');
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        showNotification(`Lokasi terdeteksi!`, 'success');
                        
                        // Update location input
                        const locationInput = document.getElementById('location');
                        if (locationInput) {
                            locationInput.value = 'Lokasi Terdeteksi';
                            locationInput.style.color = '#4CAF50';
                        }
                    },
                    () => {
                        showNotification('Izin lokasi ditolak. Silakan masukkan lokasi manual.', 'error');
                    }
                );
            } else {
                showNotification('Browser Anda tidak mendukung geolokasi.', 'error');
            }
        });
    }
    
    // Wishlist button in quick actions
    const wishlistQuickBtn = document.querySelector('.recommendation-btn');
    if (wishlistQuickBtn) {
        wishlistQuickBtn.addEventListener('click', function() {
            const wishlist = JSON.parse(localStorage.getItem('sleepwell_wishlist')) || [];
            if (wishlist.length === 0) {
                showNotification('Wishlist Anda masih kosong', 'info');
            } else {
                showNotification(`Anda memiliki ${wishlist.length} item di wishlist`, 'info');
                // You can redirect to wishlist page if you have one
                // window.location.href = 'wishlist.html';
            }
        });
    }
    
    // Promo Spesial button
    const promoBtn = document.querySelector('.promotion-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', function() {
            showNotification('🎉 Promo spesial sedang berlangsung! Diskon hingga 25% untuk hotel pilihan', 'success');
        });
    }
}

// Function to setup mobile menu
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (menuToggle && navLinks) {
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
    }
}

// Function to setup search button
function setupSearchButton() {
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const location = document.getElementById('location').value;
            const checkin = document.getElementById('check-in').value;
            const checkout = document.getElementById('check-out').value;
            const guests = document.getElementById('guests').value;
            
            if (!location) {
                showNotification('Silakan masukkan lokasi terlebih dahulu', 'error');
                return;
            }
            
            showNotification(`Mencari penginapan di ${location} untuk ${guests} tamu...`, 'info');
            
            // Simulate search delay
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mencari...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-search"></i> Cari Penginapan';
                this.disabled = false;
                
                // Show search results
                const resultInfo = document.querySelector('.result-info h2');
                if (resultInfo) {
                    resultInfo.innerHTML = `245 Hotel & Villa di <span class="highlight">${location}</span>`;
                }
                
                const resultDetails = document.querySelector('.result-info p');
                if (resultDetails) {
                    const checkinDate = new Date(checkin).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    });
                    const checkoutDate = new Date(checkout).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    });
                    resultDetails.textContent = `Check-in: ${checkinDate} • Check-out: ${checkoutDate} • ${guests} tamu`;
                }
                
                showNotification(`Ditemukan 245 penginapan di ${location}`, 'success');
            }, 1500);
        });
    }
}

// Function to setup filter and sort
function setupFilterSort() {
    // Sort dropdown
    const sortSelect = document.querySelector('.sort-dropdown select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            showNotification(`Mengurutkan berdasarkan: ${this.value}`, 'info');
        });
    }
    
    // View toggle buttons
    const gridViewBtn = document.querySelector('.view-toggle button:first-child');
    const listViewBtn = document.querySelector('.view-toggle button:last-child');
    
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                listViewBtn.classList.remove('active');
                showNotification('Mengubah tampilan ke grid', 'info');
            }
        });
        
        listViewBtn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
                gridViewBtn.classList.remove('active');
                showNotification('Mengubah tampilan ke list', 'info');
            }
        });
    }
    
    // Mobile filter button
    const filterBtn = document.querySelector('.mobile-filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            showNotification('Menu filter akan tersedia di versi mobile', 'info');
        });
    }
}

// Function to show notification
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set icon based on type
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${iconClass}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Add CSS if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 9999;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease;
                max-width: 350px;
            }
            
            .notification-success {
                background: #4CAF50;
                color: white;
                border-left: 4px solid #2E7D32;
            }
            
            .notification-error {
                background: #ff6b6b;
                color: white;
                border-left: 4px solid #d32f2f;
            }
            
            .notification-info {
                background: #2196F3;
                color: white;
                border-left: 4px solid #0D47A1;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}