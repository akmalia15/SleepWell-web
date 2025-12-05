// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Validasi login
    const validCredentials = [
        { email: "admin@gmail.com", password: "admin123", name: "Admin SleepWell" },
        { email: "user@gmail.com", password: "user123", name: "Pengguna Biasa" },
        { email: "akmalia@gmail.com", password: "akmalia123", name: "Akmalia Ciety" }
    ];
    
    // Cek apakah email dan password valid
    const user = validCredentials.find(
        cred => cred.email === email && cred.password === password
    );
    
    if (user) {
        // Login berhasil
        localStorage.setItem('sleepwell_user', JSON.stringify({
            email: user.email,
            name: user.name,
            level: "Sleep Specialist",
            isLoggedIn: true,
            remember: remember
        }));
        
        showNotification('Login berhasil! Mengarahkan ke halaman utama...', 'success');
        
        // Simulate processing delay
        const loginBtn = document.querySelector('.btn-login');
        const originalText = loginBtn.innerHTML;
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
        loginBtn.disabled = true;
        
        // Redirect to index page after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        // Login gagal - password salah
        showNotification('Email atau password salah!', 'error');
        
        // Tambahkan efek shake pada form
        document.getElementById('loginForm').classList.add('shake');
        setTimeout(() => {
            document.getElementById('loginForm').classList.remove('shake');
        }, 500);
        
        // Fokus ke field password
        document.getElementById('password').focus();
        document.getElementById('password').select();
    }
});

// Handle Google Login
document.getElementById('googleLogin').addEventListener('click', function() {
    showNotification('Login dengan Google sedang diproses...', 'success');
    
    // Simulate Google OAuth
    setTimeout(() => {
        localStorage.setItem('sleepwell_user', JSON.stringify({
            email: "user@gmail.com",
            name: "Google User",
            level: "Sleep Enthusiast",
            isLoggedIn: true,
            provider: "google"
        }));
        
        showNotification('Login dengan Google berhasil!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }, 1000);
});

// Handle Facebook Login
document.getElementById('facebookLogin').addEventListener('click', function() {
    showNotification('Login dengan Facebook sedang diproses...', 'success');
    
    // Simulate Facebook OAuth
    setTimeout(() => {
        localStorage.setItem('sleepwell_user', JSON.stringify({
            email: "user@facebook.com",
            name: "Facebook User",
            level: "Sleep Beginner",
            isLoggedIn: true,
            provider: "facebook"
        }));
        
        showNotification('Login dengan Facebook berhasil!', 'success');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }, 1000);
});

// Handle Register Link
document.getElementById('registerLink').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('Fitur pendaftaran akan segera hadir!', 'success');
});

// Handle Forgot Password
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    const email = prompt('Masukkan email Anda untuk reset password:');
    if (email) {
        showNotification(`Link reset password telah dikirim ke ${email}`, 'success');
    }
});

// Function to show notifications
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

    
    // Auto-fill if remember me was checked
    if (user && user.remember) {
        document.getElementById('email').value = user.email || '';
        document.getElementById('remember').checked = true;
    }
;