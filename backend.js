// Pilih gambar wortel berdasarkan ID
const carrotImage = document.getElementById('carrot');

// Pesan respons
const responseMessage = document.getElementById('response-message');

// Event listener ketika gambar wortel diklik
carrotImage.addEventListener('click', function() {
    // Tampilkan pesan sukses
    responseMessage.textContent = 'Bagus! Kamu berhasil membantu kelinci menemukan wortelnya!';
    responseMessage.style.color = 'green';

    // Kamu bisa menambahkan aksi selanjutnya di sini, misalnya memulai cerita baru
});

// Event listener untuk gambar lain
const otherImages = document.querySelectorAll('.captcha-image:not(#carrot)');
otherImages.forEach(image => {
    image.addEventListener('click', function() {
        // Tampilkan pesan gagal
        responseMessage.textContent = 'Oops, itu bukan wortel. Coba lagi!';
        responseMessage.style.color = 'red';
    });
});
