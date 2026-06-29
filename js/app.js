function renderDaysByWeek(weekNum) {
    const container = document.getElementById("materi-container");
    container.innerHTML = "";
    
    const filteredData = studyDatabase.filter(item => item.week === weekNum);

    if (filteredData.length === 0) {
        container.innerHTML = "<p style='text-align:center; color:#64748b;'>Belum ada materi untuk minggu ini.</p>";
        return;
    }

    filteredData.forEach(item => {
        const dayItem = document.createElement("a"); // Mengubah div menjadi link (a)
        dayItem.href = `materi.html?id=${item.id}`;  // Arahkan ke halaman materi
        dayItem.className = "day-header";
        dayItem.style.display = "flex";
        dayItem.style.textDecoration = "none";
        dayItem.style.color = "inherit";
        dayItem.style.marginBottom = "16px";
        
        dayItem.innerHTML = `
            <span>📌 ${item.day}: ${item.title}</span>
            <span style="color: #4f46e5;">Buka Materi ➔</span>
        `;
        container.appendChild(dayItem);
    });
}

function switchWeek(weekNum, btn) {
    renderDaysByWeek(weekNum);
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => renderDaysByWeek(1));