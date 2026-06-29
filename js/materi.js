document.addEventListener("DOMContentLoaded", () => {
    // 1. Ambil ID dari URL (contoh: materi.html?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));

    // 2. Cari data materi di database
    const data = studyDatabase.find(item => item.id === id);

    if (data) {
        // 3. Tampilkan Judul dan Isi Materi
        document.getElementById("materi-title").innerText = `${data.day}: ${data.title}`;
        document.getElementById("materi-subtitle").innerText = `Minggu ke-${data.week}`;
        document.getElementById("materi-content").innerHTML = data.content;
        
        // 4. Atur tombol agar mengarah ke halaman soal yang tepat
        const btnSoal = document.getElementById("btn-lanjut-soal");
        btnSoal.href = `soal.html?id=${data.id}`;
    } else {
        // Jika terjadi error / ID tidak ditemukan
        document.getElementById("materi-title").innerText = "Materi Tidak Ditemukan";
        document.getElementById("materi-content").innerHTML = "<p>Maaf, materi yang Anda cari tidak ada.</p>";
        document.getElementById("btn-lanjut-soal").style.display = "none";
    }
});