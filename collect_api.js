const button = document.getElementById('ambilData');
const hasil = document.getElementById('hasil');

// Fungsi untuk mengambil data dari API
async function ambilDataDariAPI() {
    try {
        const response = await fetch('https://asia-southeast2-gis-tester-401506.cloudfunctions.net/function-1');
        const data = await response.text();
        hasil.innerHTML = `<p>${data.Name}</p>`;
        hasil.innerHTML = `<p>${data.Coordinate}</p>`;
        hasil.innerHTML = `<p>${data.Type}</p>`;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        hasil.innerHTML = '<p>Terjadi kesalahan saat mengambil data dari API.</p>';
    }
}
button.addEventListener('click', ambilDataDariAPI);
