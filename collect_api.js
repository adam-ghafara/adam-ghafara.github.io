const button = document.getElementById('ambilData');
const hasil = document.getElementById('hasil');

// Fungsi untuk mengambil data dari API
async function ambilDataDariAPI() {
    try {
        const response = await fetch('');
        const data = await response.text();
        hasil.innerHTML = `<p>${data}</p>`;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        hasil.innerHTML = '<p>Terjadi kesalahan saat mengambil data dari API.</p>';
    }
}
button.addEventListener('click', ambilDataDariAPI);
