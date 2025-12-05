// data.js - Data untuk aplikasi SleepWell

const sleepwellProperties = [
    {
        id: 1,
        name: "Amora Hills",
        type: "hotel",
        location: "Kuta, Bali",
        rating: 5,
        price: 1760000,
        oldPrice: 2200000,
        discount: 20,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hotel mewah dengan pemandangan sunset yang indah dan fasilitas lengkap.",
        facilities: ["Kolam renang", "Spa", "Restoran", "Gym", "WiFi gratis"],
        isWishlist: false
    },
    {
        id: 2,
        name: "Asana Village",
        type: "villa",
        location: "Ubud, Bali",
        rating: 4.4,
        price: 2288000,
        oldPrice: null,
        discount: 0,
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
        description: "Villa pribadi dengan kolam renang pribadi di tengah sawah.",
        facilities: ["Kolam renang pribadi", "Dapur lengkap", "Taman pribadi", "Parkir gratis", "WiFi"],
        isWishlist: false
    },
    {
        id: 3,
        name: "Palmora Uluwatu",
        type: "resort",
        location: "Nusa Dua, Bali",
        rating: 4.8,
        price: 2250000,
        oldPrice: 3000000,
        discount: 25,
        image: "https://images.unsplash.com/photo-1596470396723-c9fcecac1c7c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Resort eksklusif dengan akses langsung ke pantai pribadi.",
        facilities: ["Pantai pribadi", "Restoran 24 jam", "Kids club", "Spa luxury", "Water sports"],
        isWishlist: false
    },
    {
        id: 4,
        name: "Arcline Residence",
        type: "villa",
        location: "Bedugul, Bali",
        rating: 4,
        price: 1760000,
        oldPrice: null,
        discount: 0,
        image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Villa modern dengan view danau dan suasana sejuk.",
        facilities: ["View danau", "Balkon pribadi", "AC", "TV kabel", "WiFi cepat"],
        isWishlist: false
    },
    {
        id: 5,
        name: "Tropica Luna Villa",
        type: "hotel",
        location: "Gianyar, Bali",
        rating: 4,
        price: 3354000,
        oldPrice: 4300000,
        discount: 22,
        image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Hotel tropis dengan desain modern dan fasilitas wellness.",
        facilities: ["Wellness center", "Yoga studio", "Organic restaurant", "Meditation garden", "Pool bar"],
        isWishlist: false
    },
    {
        id: 6,
        name: "Bhuana Bliss Villa",
        type: "resort",
        location: "Ubud, Bali",
        rating: 5,
        price: 2754000,
        oldPrice: null,
        discount: 0,
        image: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Resort dengan konsep eco-friendly di tengah hutan.",
        facilities: ["Eco-friendly", "Forest view", "Organic farm", "Eco pool", "Bamboo restaurant"],
        isWishlist: false
    },
    {
        id: 7,
        name: "Dewata Whisper Lodge",
        type: "resort",
        location: "Kuta, Bali",
        rating: 5,
        price: 1435000,
        oldPrice: 1750000,
        discount: 18,
        image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzb3J0fGVufDB8fDB8fHww",
        description: "Lodge nyaman dengan lokasi strategis dekat pusat perbelanjaan.",
        facilities: ["Central location", "Shopping access", "Airport transfer", "Concierge", "Business center"],
        isWishlist: false
    },
    {
        id: 8,
        name: "Nirwana Luxe Estate",
        type: "villa",
        location: "Bedugul, Bali",
        rating: 4.4,
        price: 4149000,
        oldPrice: null,
        discount: 0,
        image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
        description: "Villa mewah dengan staff pribadi dan desain arsitektur Bali autentik.",
        facilities: ["Private butler", "Traditional architecture", "Private cinema", "Wine cellar", "Personal chef"],
        isWishlist: false
    },
    {
        id: 9,
        name: "Coconut Crest Bali",
        type: "villa",
        location: "Nusa Dua, Bali",
        rating: 3,
        price: 2848000,
        oldPrice: null,
        discount: 0,
        image: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Villa dengan view laut dan desain minimalis yang elegan.",
        facilities: ["Sea view", "Minimalist design", "Infinity pool", "Sunset spot", "Beach access"],
        isWishlist: false
    }
];

// Leaderboard data
const sleepwellLeaderboard = [
    { rank: 1, name: "Sarah Johnson", points: 394, badge: "master", initials: "SJ" },
    { rank: 2, name: "Michael Chen", points: 387, badge: "master", initials: "MC" },
    { rank: 3, name: "John Doe", points: 380, badge: "master", initials: "JD" },
    { rank: 4, name: "Lisa Neya", points: 346, badge: "specialist", initials: "LN" },
    { rank: 5, name: "Akmalia Ciety", points: 315, badge: "specialist", initials: "AC" },
    { rank: 6, name: "Maria Garcia", points: 305, badge: "specialist", initials: "MG" },
    { rank: 7, name: "Robert Brown", points: 300, badge: "specialist", initials: "RB" },
    { rank: 8, name: "Emma Wilson", points: 298, badge: "specialist", initials: "EW" },
    { rank: 9, name: "James Taylor", points: 276, badge: "specialist", initials: "JT" },
    { rank: 10, name: "Olivia Martinez", points: 269, badge: "specialist", initials: "OM" }
];

// Badges data
const sleepwellBadges = [
    { name: "Sleep Newbie", level: 1, icon: "fas fa-bed", color: "newbie", description: "Pemula yang baru saja memulai perjalanan dengan SleepWell" },
    { name: "Sleep Seeker", level: 2, icon: "fas fa-search-location", color: "seeker", description: "Pencari penginapan yang aktif" },
    { name: "Sleep Specialist", level: 3, icon: "fas fa-concierge-bell", color: "specialist", description: "Spesialis penginapan berpengalaman" },
    { name: "Sleep Master", level: 4, icon: "fas fa-crown", color: "master", description: "Master penginapan dengan pengalaman luas" }
];

// data kamar
const sleepwellRooms = [
    { id: 1, propertyId: 1, name: "Deluxe Room", description: "Kamar luas dengan view kota dan fasilitas standar", price: 830000 },
    { id: 2, propertyId: 1, name: "Executive Suite", description: "Suite mewah dengan living room terpisah", price: 850000 },
    { id: 3, propertyId: 1, name: "Presidential Suite", description: "Suite terbaik dengan semua fasilitas premium", price: 1500000 },
    { id: 4, propertyId: 2, name: "Garden Villa", description: "Villa dengan taman pribadi", price: 1200000 },
    { id: 5, propertyId: 2, name: "Pool Villa", description: "Villa dengan kolam renang pribadi", price: 1800000 },
    { id: 6, propertyId: 3, name: "Ocean View Room", description: "Kamar dengan pemandangan laut langsung", price: 900000 },
    { id: 7, propertyId: 3, name: "Beachfront Suite", description: "Suite dengan akses langsung ke pantai", price: 1400000 },
    { id: 8, propertyId: 4, name: "Standard Room", description: "Kamar standar dengan fasilitas lengkap", price: 400000 },
    { id: 9, propertyId: 4, name: "Superior Room", description: "Kamar superior dengan view danau", price: 750000 }
];

// Facilities data 
const sleepwellFacilities = [
    { id: 1, name: "Sarapan Pagi", icon: "fa-coffee", price: 75000 },
    { id: 2, name: "Late Check-out", icon: "fa-clock", price: 200000 },
    { id: 3, name: "Bandara Transfer", icon: "fa-shuttle-van", price: 350000 },
    { id: 4, name: "Spa Package", icon: "fa-spa", price: 450000 },
    { id: 5, name: "Dinner Romantic", icon: "fa-utensils", price: 550000 }
];

// Helper functions
function formatPrice(price) {
    if (typeof price !== 'number') {
        price = parseFloat(price) || 0;
    }
    return price.toLocaleString('id-ID');
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function getPropertyById(id) {
    return sleepwellProperties.find(property => property.id === parseInt(id));
}

function getRoomById(id) {
    return sleepwellRooms.find(room => room.id === parseInt(id));
}

function getFacilityById(id) {
    return sleepwellFacilities.find(facility => facility.id === parseInt(id));
}

// ==================== DATABASE FUNCTIONS ====================

function getDatabase() {
    return {
        // Data kamar
        getRoomsByProperty: function(propertyId) {
            const rooms = sleepwellRooms.filter(room => room.propertyId === parseInt(propertyId));
            console.log(`[DEBUG] Found ${rooms.length} rooms for property ${propertyId}:`, rooms);
            return rooms;
        },
        
         // Data fasilitas
        getFacilities: function() {
            console.log('[DEBUG] Facilities:', sleepwellFacilities);
            return sleepwellFacilities;
        },
        
        // Data properti
        getPropertyById: function(id) {
            const property = getPropertyById(id);
            console.log('[DEBUG] Property:', property);
            return property;
        },
        
        // Get room by ID
        getRoomById: function(id) {
            return getRoomById(id);
        },
        
        // Hitung total harga
         calculateTotal: function(propertyId, roomId, nights, selectedFacilities, guests) {
            console.log('[DEBUG] calculateTotal called with:', {
                propertyId, roomId, nights, selectedFacilities, guests
            });
            
            const room = getRoomById(roomId);
            if (!room) {
                console.error(`[ERROR] Room ${roomId} not found`);
                return 0;
            }
            
            let total = room.price * nights;
            console.log(`[DEBUG] Base room price: ${room.price} × ${nights} nights = ${room.price * nights}`);

            // Tambah fasilitas
            selectedFacilities.forEach(facilityId => {
                const facility = getFacilityById(facilityId);
                if (facility) {
                    if (facilityId === 1) { // Sarapan
                        const breakfastPrice = facility.price * guests * nights;
                        total += breakfastPrice;
                        console.log(`[DEBUG] Breakfast: ${facility.price} × ${guests} guests × ${nights} nights = ${breakfastPrice}`);
                    } else {
                        total += facility.price;
                        console.log(`[DEBUG] Facility ${facility.name}: ${facility.price}`);
                    }
                }
            });
            
            // Tambah pajak 10%
            const tax = total * 0.1;
            total = total + tax;
            console.log(`[DEBUG] Tax (10%): ${tax}`);
            console.log(`[DEBUG] Total before rounding: ${total}`);
            
            const finalTotal = Math.round(total);
            console.log(`[DEBUG] Final total: ${finalTotal}`);
            return finalTotal;
        },
        
        
        // Simpan booking
        saveBooking: function(booking) {
            booking.id = new Date().getTime();
            booking.status = 'pending';
            booking.bookingDate = new Date().toISOString();
            
            console.log('[DEBUG] Saving booking:', booking);
            
            try {
                let allBookings = JSON.parse(localStorage.getItem('sleepwell_bookings') || '[]');
                allBookings.push(booking);
                localStorage.setItem('sleepwell_bookings', JSON.stringify(allBookings));
                localStorage.setItem('last_booking', JSON.stringify(booking));
                console.log('[DEBUG] Booking saved to localStorage');
            } catch (error) {
                console.error('[ERROR] Error saving booking:', error);
            }
            
            return booking;
        },
        
        // Get all bookings (optional)
        getAllBookings: function() {
            try {
                return JSON.parse(localStorage.getItem('sleepwell_bookings') || '[]');
            } catch (error) {
                console.error('Error getting bookings:', error);
                return [];
            }
        }
    };
}

// Export untuk debugging
console.log('data.js loaded successfully');
console.log('getDatabase function available:', typeof getDatabase === 'function');

// Debug info
console.log('[DEBUG] data.js loaded');
console.log('[DEBUG] Rooms available:', sleepwellRooms.length);
console.log('[DEBUG] Facilities available:', sleepwellFacilities.length);
console.log('[DEBUG] getDatabase function:', typeof getDatabase);