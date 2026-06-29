// Database materi dan soal ujian selama 4 minggu (28 hari)
// Database Materi dan Kuis Harian (4 Minggu)
// Database Materi dan Kuis Harian (4 Minggu)
const studyDatabase = [
    {
        id: 1,
        week: 1,
        day: "Hari 1",
        title: "Keselamatan & Prosedur Kerja Dasar (K3)",
        content: `
            <p>Pelajari 10 pernyataan Benar/Salah di bawah ini sebagai bahan evaluasi:</p>
            <div class="materi-list">
                <p>1. <strong>きかいの スイッチは、ぬれた てで さわってもよい。</strong><br><em>(Boleh menyentuh saklar mesin dengan tangan basah.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>2. <strong>かさいを はっけん したら すぐに ひとりで しょうか しなければ ならない。</strong><br><em>(Bila ditemukan kebakaran, segera matikan api sendiri.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>3. <strong>さぎょうようの どうぐや ざいりょうは つねに せいり せいとん しておかなければ ならない。</strong><br><em>(Material dan peralatan harus selalu diatur.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>4. <strong>ふように なった だんボールばこ や だんボールし は 100% りさいくる することが できます。</strong><br><em>(Kardus bekas dapat 100% didaur ulang.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>5. <strong>きかいの せいそうや せいびは かならず かいてんぶぶん などの かどうぶが かんぜんに ていし してから おこなわなければ ならない。</strong><br><em>(Pembersihan mesin harus saat bagian bergerak berhenti total.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>6. <strong>あぶらを こぼしたら みずを かけます。</strong><br><em>(Bila minyak tumpah, taburkan air.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>7. <strong>つかった こうぐは さいしょに おいてあった ばしょに かならず もどす。</strong><br><em>(Kembalikan alat ke tempat semula.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>8. <strong>きかいが いったん とまったときも あんぜんを かくにんしてから さわるように こころがける。</strong><br><em>(Mesin berhenti sebentar pun, periksa keamanan dulu.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>9. <strong>きかいを つかわない さぎょうでは ぼうしは かぶらなくてもよい。</strong><br><em>(Pekerjaan tanpa mesin tak perlu pakai topi.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>10. <strong>おもい にもつを もちあげるときは りょうあしを まっすぐに のばして はずみを つけて もちあげると よい。</strong><br><em>(Angkat barang berat dengan kaki lurus dan sentakan.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
            </div>
        `,
        quizzes: [
            { question: "1. きかいの スイッチは、ぬれた てで さわってもよい。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "2. かさいを はっけん したら すぐに ひとりで しょうか しなければ ならない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "3. さぎょうようの どうぐや ざいりょうは つねに せいり せいとん しておかなければ ならない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "4. ふように なった だんボールばこ や だんボールし は 100% りさいくる することが できます。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "5. きかいの せいそうや せいびは かならず かいてんぶぶん などの かどうぶが かんぜんに ていし してから おこなわなければ ならない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "6. あぶらを こぼしたら みずを かけます。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "7. つかった こうぐは さいしょに おいてあった ばしょに かならず もどす。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "8. きかいが いったん とまったときも あんぜんを かくにんしてから さわるように こころがける。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "9. きかいを つかわない さぎょうでは ぼうしは かぶらなくてもよい。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "10. おもい にもつを もちあげるときは りょうあしを まっすぐに のばして はずみを つけて もちあげると よい。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 }
        ]
    },
    {
        id: 2,
        week: 1,
        day: "Hari 2",
        title: "Prosedur Forklift & Kebersihan Diri",
        content: `
            <div class="materi-list" style="line-height: 1.8;">
                <p>11. <strong>フォークリフトが ちかづいてきたときは ほこうしゃが ゆうせんする。</strong><br><em>(Ketika forklift mendekat, pejalan kaki harus diutamakan.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>12. <strong>きかいの スイッチは ぬれたてで さわっては いけない。</strong><br><em>(Jangan menyentuh saklar mesin dengan tangan basah.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>13. <strong>あぶらつきの ケースは りょうひん である。</strong><br><em>(Kotak yang berminyak adalah barang bagus/layak.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>14. <strong>しきりは だい と しょう がある。</strong><br><em>(Pada partisi karton terdapat bagian besar dan kecil.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>15. <strong>きかい トラブルが おきたときは かならず きかいを ていし してから じさぎょうを おこなう。</strong><br><em>(Saat terjadi masalah pada mesin, pastikan lakukan perawatan setelah mesin berhenti.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>16. <strong>ダンボールの やくめは なかみを ほごする ためである。</strong><br><em>(Kegunaan kardus adalah untuk melindungi isinya.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>17. <strong>さぎょうちゅうに ぐあいが わるくなっても おわるまで やすんでは いけない。</strong><br><em>(Saat melakukan pekerjaan, jangan beristirahat meskipun kondisi badan memburuk.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>18. <strong>さぎょうを かいしする まえに かみのけ などが せいひんに ふちゃく しないよう、じょきょしてから さぎょうを はじめなくては ならない。</strong><br><em>(Sebelum memulai pekerjaan, pastikan tidak ada rambut yang menempel pada produk.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>19. <strong>りょうりじを つくるときに じゅうぶん はいりょする。</strong><br><em>(Ketika membuat makanan di rumah, perlu perhatikan urutan kebersihan.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>20. <strong>さぎょうかいしは しょうしょう ちこくしてもよい。</strong><br><em>(Tidak apa-apa sedikit terlambat dari jam kerja.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
            </div>
        `,
        quizzes: [
            { question: "11. フォークリフトが ちかづいてきたときは ほこうしゃが ゆうせんする。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "12. きかいの スイッチは ぬれたてで さわっては いけない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "13. あぶらつきの ケースは りょうひん である。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "14. しきりは だい と しょう がある。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "15. きかい トラブルが おきたときは かならず きかいを ていし してから じさぎょうを おこなう。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "16. ダンボールの やくめは なかみを ほごする ためである。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "17. さぎょうちゅうに ぐあいが わるくなっても おわるまで やすんでは いけない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 },
            { question: "18. さぎょうを かいしする まえに かみのけ などが せいひんに ふちゃく しないよう、じょきょしてから さぎょうを はじめなくては なならない。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "19. りょうりを つくるときに じゅうぶん はいりょする。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 0 },
            { question: "20. さぎょうかいしは しょうしょう ちこくしてもよい。", options: ["A. はい (Benar)", "B. いいえ (Salah)"], answer: 1 }
        ]
    },
    {
        id: 3,
        week: 1,
        day: "Hari 3",
        title: "Dasar Pengemasan (包装 - Hōsō)",
        content: `
            <div class="materi-list" style="line-height: 1.8;">
                <p>1. <strong>こうぎょうほうそうとは かもつの ゆそうや ほかんすることを もくてきとした ほうそうを いいます。</strong><br><em>(Pengemasan industri adalah pengemasan yang bertujuan untuk pengangkutan dan penyimpanan muatan.)</em><br>Status: O (Benar)</p>
                <p>2. <strong>こそうとは ほうそうかもつ ひとつ ひとつの ほうそうを いいます。</strong><br><em>(Pengemasan individu mengacu pada pengemasan setiap muatan yang dikemas.)</em><br>Status: O (Benar)</p>
                <p>3. <strong>このマークは にもつの ただしぃ うえほうこうを あらわしている。</strong><br><em>(Tanda ini mewakili arah atas barang yang benar.)</em><br>
                Status: O (Benar)</p>
                 <div style="text-align: center; margin: 15px 0;">
        <img src="assets/images/tanda-arah-atas.png" alt="Diagram Kotak Karton" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
    </div>
                <p>4. <strong>ハンドシーラとは こうはんを せつだんする きかいの ことを いいます。</strong><br><em>(Handsealer adalah mesin pemotong kayu lapis.)</em><br>Status: X (Salah)</p>
                <p>5. <strong>じどうぎうちは おなじきかいで くぎも ステープルも つかえます。</strong><br><em>(Mesin otomatis (paku) bisa menggunakan paku dan staples pada mesin yang sama.)</em><br>Status: X (Salah)</p>
                <p>6. <strong>ぼうすいほうそうとは ほうそうの なかの しなものが みずに ぬれない ように する ほうそうです。</strong><br><em>(Pengemasan kedap air adalah pengemasan yang mencegah barang-barang di dalam kemasan menjadi basah.)</em><br>Status: O (Benar)</p>
                <p>7. <strong>こんぽうようの もくざいには かくざいと ひらわりざい と いたが あります。</strong><br><em>(Kayu untuk pengemasan terdiri dari kayu persegi, kayu datar, dan papan.)</em><br>Status: O (Benar)</p>
                <p>8. <strong>いっぱんに つかわれてる だんぼーるは みずに ぬれると つよさが かわります。</strong><br><em>(Kekuatan kotak karton yang biasa digunakan berubah saat terkena air.)</em><br>Status: O (Benar)</p>
                <p>9. <strong>ずの だんぼーるしきりは いちばんおおく つかわれているものです。</strong><br><em>(Format kotak karton pada gambar adalah yang paling umum digunakan.)</em><br>
                
                Status: X (Salah)</p>
                <div style="text-align: center;">
                <img src="assets/images/palet.png" alt="Palet" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd; ">
                </div>
                <p>10. <strong>ぱれっととは かもつの ほかんや ゆそうに てきしています。</strong><br><em>(Palet cocok untuk menyimpan dan mengangkut muatan.)</em><br>Status: O (Benar)</p>
                </div>
        `,
        quizzes: [
            { question: "1. こうぎょうほうそうとは かもつの ゆそうや ほかんすることを もくてきとした ほうそうを いいます。", options: ["O (Benar)", "X (Salah)"], answer: 0 },
            { question: "2. こそうとは ほうそうかもつ ひとつ ひとつの ほうそうを いいます。", options: ["O (Benar)", "X (Salah)"], answer: 0 },
            { question: "3. このマークは にもつの ただしぃ うえほうこうを あらわしている。",
                 image: "assets/images/tanda-arah-atas.png",
                 options: ["O (Benar)", "X (Salah)"], answer: 0 },
                
            { question: "4. ハンドシーラとは こうはんを せつだんする きかいの ことを いいます。", options: ["O (Benar)", "X (Salah)"], answer: 1 },
            { question: "5. じどうぎうちは おなじきかいで くぎも ステープルも つかえます。", options: ["O (Benar)", "X (Salah)"], answer: 1 },
            { question: "6. ぼうすいほうそうとは ほうそうの なかの しなものが みずに ぬれない ように する ほうそうです。", options: ["O (Benar)", "X (Salah)"], answer: 0 },
            { question: "7. こんぽうようの もくざいには かくざいと ひらわりざい と いたが あります。", options: ["O (Benar)", "X (Salah)"], answer: 0 },
            { question: "8. いっぱんに つかわれてる だんぼーるは みずに ぬれると つよさが かわります。", options: ["O (Benar)", "X (Salah)"], answer: 0 },
            { question: "9. ずの だんぼーるしきりは いちばんおおく つかわれているものです。",image:"assets/images/palet.png" ,options: ["O (Benar)", "X (Salah)"], answer: 1 },
            { question: "10. ぱれっととは かもつの ほかんや ゆそうに てきしています。", options: ["O (Benar)", "X (Salah)"], answer: 0 }
        ]
    },
    {
        id: 4,
        week: 1,
        day: "Hari 4",
        title: "Metode Pengemasan & Simbol Penanganan (Marking)",
        content: `
            <div class="materi-list" style="line-height: 1.8;">
                <p>11. <strong>ばれっとには かみせい すちーるせい ぶらすちっくせい の ものもあります。</strong><br><em>(Beberapa palet terbuat dari kertas, baja, dan plastik.)</em><br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>12. <strong>てっぱんの うえで ひらうちするとき くぎを まげることを くりんち といいます。</strong><br><em>(Membengkokan paku saat meratakan di atas pelat besi disebut clinch.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>13. <strong>ずの てーぷのはりかたは Iばり といいます。</strong><br><em>(Metode menempelkan Lakban pada gambar disebut dengan metode tempelan I.)</em><br>
                <div style="text-align: center; margin: 15px 0;">
                <img src="assets/images/soal 13.png" alt="soal 13" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
                </div>
                <span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>14. <strong>だんぼーるばこを くみたてるときは いっぱんに ねんちゃくてーぷを つかいます。</strong><br><em>(Lakban umumnya digunakan saat merakit kotak karton.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>15. <strong>このまーくは しなものが こわれやすいので ちゅういして とりあつかうことを しめします。</strong><br><em>(Tanda ini menunjukkan bahwa barang tersebut rapuh dan harus ditangani dengan hati-hati.)</em><br>
                
                <div style="text-align: center; margin: 15px 0;">
        <img src="assets/images/soal 15.png" alt="soal 15" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
    </div>
                <br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>16. <strong>このマークは かもつが みずに ぬれても よいことを しめします。</strong><br><em>(Tanda ini menunjukkan bahwa muatan boleh basah.)</em><br>
                <div style="text-align: center; margin: 15px 0;">
        <img src="assets/images/soal-16.png" alt="Soal 16" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
    </div>
                <br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>17. <strong>このマークは たおれやすい かもつの ことを しめします。</strong><br><em>(Tanda ini menandakan muatan yang rawan jatuh.)</em><br>
                <div style="text-align: center; margin: 15px 0;">
        <img src="assets/images/soal-17.png" alt="soal 17" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
    </div>
                <br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>18. <strong>このマークは おくがいに かもつを ほかんすることを しめします。</strong><br><em>(Tanda ini menunjukkan bahwa muatan disimpan di luar ruangan.)</em><br>
                <div style="text-align: center; margin: 15px 0;">
                <img src="assets/images/soal-18.png" alt="soal 18" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
                </div>
                <br><span style="color:red">Status: いいえ / NO / 誤り (SALAH)</span></p>
                <p>19. <strong>この ひょうしきの あるところには はいっては いけません。</strong><br><em>(Jangan masuk di tempat tanda ini berada.)</em><br>
                <div style="text-align: center; margin: 15px 0;">
        <img src="assets/images/soal-19.png" alt="soal 19" style="max-width: 100%; border-radius: 8px; border: 1px solid #ddd;">
    </div>
                <br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
                <p>20. <strong>じどうくぎうちきを つかうときは ほごめがねを かけます。</strong><br><em>(Kenakan kacamata pelindung saat menggunakan mesin pemaku otomatis.)</em><br><span style="color:green">Status: はい / YES / 正しい (BENAR)</span></p>
            </div>
        `,
        quizzes: [
            { question: "11. ばれっとには かみせい すちーるせい ぶらすちっくせい の ものもあります。", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 1 },
            { question: "12. てっぱんの うえで ひらうちするとき くぎを まげることを くりんち といいます。", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 },
            { question: "13. ずの てーぷのはりかたは Iばり といいます。",image:"assets/images/soal 13.png" ,options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 },
            { question: "14. だんぼーるばこを くみたてるときは いっぱんに ねんちゃくてーぷを つかいます。", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 },
            { question: "15. このまーくは しなものが こわれやすいので ちゅういして とりあつかうことを しめします。",image:"assets/images/soal 15.png", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 },
            { question: "16. このマークは かもつが みずに ぬれても よいことを しめします。",image:"assets/images/soal-16.png", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 1 },
            { question: "17. このマークは たおれやすい かもつの ことを しめします。",image:"assets/images/soal-17.png", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 1 },
            { question: "18. このマークは おくがいに かもつを ほかんすることを しめします。",image:"assets/images/soal-18.png", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 1 },
            { question: "19. この ひょうしきの あるところには はいっては いけません。",image:"assets/images/soal-19.png", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 },
            { question: "20. じどうくぎうちきを つかうときは ほごめがねを かけます。", options: ["A. はい (正しい)", "B. いいえ (誤り)"], answer: 0 }
        ]
    }
    
];
