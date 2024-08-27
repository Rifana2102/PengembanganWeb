document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Ambil nilai dari setiap field
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let valid = true;
    let errorMessage = "";

    // Cek apakah nama kosong
    if (name === "") {
        valid = false;
        errorMessage += "Name field is required.\n";
    }

    // Cek apakah email kosong atau format salah
    if (email === "") {
        valid = false;
        errorMessage += "Email field is required.\n";
    } else if (!validateEmail(email)) {
        valid = false;
        errorMessage += "Please enter a valid email address.\n";
    }

    // Cek apakah pesan kosong
    if (message === "") {
        valid = false;
        errorMessage += "Message field is required.\n";
    }

    // Jika ada kesalahan, tampilkan pesan dan cegah form submit
    if (!valid) {
        alert(errorMessage);
        event.preventDefault();
    }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
