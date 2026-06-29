// Variabel untuk melacak progres kuis
let currentId = null;
let totalQuestions = 0;
let answeredQuestions = 0;
let correctAnswers = 0;

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentId = parseInt(urlParams.get('id'));

    const data = studyDatabase.find(item => item.id === currentId);

    if (data) {
        document.getElementById("quiz-title").innerText = `Evaluasi: ${data.day} - ${data.title}`;
        
        let shuffledQuizzes = [...data.quizzes].sort(() => Math.random() - 0.5);
        totalQuestions = shuffledQuizzes.length; // Simpan total soal

        const container = document.getElementById("quiz-container");
        // Ganti bagian ini di dalam file js/quiz.js
shuffledQuizzes.forEach((quiz, index) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    
    // Cek apakah ada gambar. Jika ada, masukkan tag <img>
    const imageHtml = quiz.image 
        ? `<img src="${quiz.image}" alt="Gambar Soal" style="max-width: 100%; display: block; margin: 10px auto; border-radius: 8px; border: 1px solid #ccc;">` 
        : '';

    card.innerHTML = `
        <p class="quiz-question">${index + 1}. ${quiz.question}</p>
        ${imageHtml}
        ${quiz.options.map((opt, oIdx) => `
            <label class="quiz-option">
                <input type="radio" name="q${index}" value="${oIdx}" onchange="checkAnswer(this, ${oIdx}, ${quiz.answer})">
                ${opt}
            </label>
        `).join('')}
        <div class="feedback" style="display:none; margin-top:10px; font-weight:600;"></div>
    `;
    container.appendChild(card);
});
    } else {
        document.getElementById("quiz-title").innerText = "Soal tidak ditemukan";
    }
});

function checkAnswer(radio, selectedIdx, correctIdx) {
    const card = radio.closest('.quiz-card');
    const feedback = card.querySelector('.feedback');
    const radios = card.querySelectorAll('input[type="radio"]');
    
    // Kunci pilihan
    radios.forEach(r => r.disabled = true);
    feedback.style.display = 'block';
    
    // Cek Benar/Salah
    if (selectedIdx === correctIdx) {
        feedback.innerText = "✅ Benar!";
        feedback.style.color = "#10b981"; // Hijau
        correctAnswers++; // Tambah skor jika benar
    } else {
        feedback.innerText = "❌ Salah.";
        feedback.style.color = "#ef4444"; // Merah
    }

    // Tambah penghitung soal terjawab
    answeredQuestions++;

    // Jika semua soal sudah dijawab, tampilkan bagian akhir
    if (answeredQuestions === totalQuestions) {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    const completionSection = document.getElementById("completion-section");
    const scoreText = document.getElementById("score-text");
    
    scoreText.innerText = `Skor Anda: ${correctAnswers} dari ${totalQuestions} Soal Benar`;
    completionSection.style.display = "block";
    
    // Efek scroll halus (smooth scroll) otomatis ke kotak hasil di bagian bawah
    setTimeout(() => {
        completionSection.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 300);
}

function kembaliKeMateri() {
    // Arahkan kembali ke halaman materi menggunakan ID saat ini
    window.location.href = `materi.html?id=${currentId}`;
}