// Pilih gambar wortel berdasarkan ID
const carrotImage = document.getElementById('carrot');

// Pesan respons
const responseMessage = document.getElementById('response-message');

// Event listener ketika gambar wortel diklik
carrotImage.addEventListener('click', function() {
    // Tampilkan pesan sukses
    responseMessage.textContent = 'Bagus! Kamu berhasil membantu kelinci menemukan wortelnya!';
    responseMessage.style.color = 'green';

    // Pindah ke halaman berikutnya setelah 1 detik
    setTimeout(function() {
        window.location.href = 'page2.html'; // Ganti dengan halaman berikutnya
    }, 1000);
});


// ini untuk test apakah ada error dari console
// if (carrotImage) {
//     console.log("Gambar wortel ditemukan!"); // Ini memastikan elemen ditemukan.
// }

// carrotImage.addEventListener('click', function() {
//     // Log ketika gambar diklik
//     console.log('Gambar wortel diklik!');
//     alert('Berpindah halaman...');
    
//     // Pindah ke halaman berikutnya
//     setTimeout(function() {
//         window.location.href = '../html/page2.html'; 
//     }, 1000);
// });



// Event listener untuk gambar lain
const otherImages = document.querySelectorAll('.captcha-image:not(#carrot)');
otherImages.forEach(image => {
    image.addEventListener('click', function() {
        // Tampilkan pesan gagal
        responseMessage.textContent = 'Oops, itu bukan wortel. Coba lagi!';
        responseMessage.style.color = 'red';
    });
});
