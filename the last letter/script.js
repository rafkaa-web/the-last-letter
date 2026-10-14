/**
 * THE LAST LETTER - INTERACTIVE SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. DATA SURAT
    // ----------------------------------------------------------------------
    const LETTER_DATA = {
        title: "The Last Letter",
        subtitle: "a story that will always be part of my journey.",
        recipient: "Titik Kusmawati",
        paragraphs: [
            "Titik Kusmawati,",
            "Aku udah memahami semua keputusan yang kamu sampaikan lewat dia, jujur akuu ngga sama sekali kejang kejang atau gimana saat tadi membaca long text kamu sesuai apa yang kamu sampaikan didalam teks itu, aku mau minta waktu kamu sebentar untuk membaca last text ini dari aku yaa, sebentar aja kok ga lamaa”.",
            "Titikk, aku ngga pernah membenci ataupun kecewa dengan pilihan kamu. Semua yang kamu lakukan dan setiap respons yang kamu beri itu, tetap aku hargai. Aku juga ngga kaget bgt kalo kamu masih merespon repoo, dan aku ngga bermaksud membawa itu ke arah lain.",
            "Maaff atas semua sikapku selama ini terutama karena aku sering datang kerumah tanpa mempertimbangkan keadaan, terutama samaa bang Ijennn dan kak ciciii. Kalo kamu berkenan, sampaikan kata maaf ku ke mamah, papahh, kak cicii dan bang ijenn jugaa yaa.",
            "Soal ucapan kamu yang \"pokonya gamau ketahan sama hubungan yang otaknya negatif trus, i want fun reletionship\". Aku ngga mengerti yang terlintas di pikiran kamu apa sampai kamu bicara ke arah ituuu, mungkin kamu ngerasa aku bikin kamu ngga nyaman, atau mungkin kata kasarnya aku \"obscene\" yaa? Selama akuu di dekat kamu aku terasa hanya nyamann aja, ngga lebih dari itu. Terlintas dalam pikiran aku, aku ngga akan mungkin melakukan hal yang negatif apapun apalagi ke kamu sendiri.",
            "Dari awal tujuan ku cuma 1, buat kamuu tertawa sambil berbagi ceritaa antara kamu sama aku bicara dengan sepenuh yapping kita yang ngga terlintas di pikiran umat manusia. Akuu ga pernah berfikiran ingin terus mendapatkan suasana romance sastra sampe bikin kuliah kamu terganggu, tujuan aku ngga pernah ingin itu terjadi, aku cuma mau kita tetap ada waktu buat ngobrol santai disaat setelah suatu tugas dan kewajiban kita selesai kita penuhi. Dann... aku tau kita udah punya porsi nya masing masing, kamu ingat dengan porsi mu seberapa, dan begitu juga dengan aku.",
            "Sekarang, fokuslah dengan perkuliahan kamuu, ga nyangka juga yaa baru kemarin aku sendiri yang membantu kamu daftar online langsung di web umrii nyaa, sekarang kamu langsung ingin pergi begitu aja\", cuman aku ngga apa apaa kok. Perluas lah relasi yang kamu bilang disitu dan cari pengalaman kamu sebanyak banyaknya, ikuti beberapa organisasi dan UKM yang kamu minati, saat perkuliahan kamu sudah stabil dan kamu udah bisa memanajemen kan waktu kamu dengan sesuai. Lalu nikmati semua prosesnya. Berikan yang terbaik untuk diri kamu, dan keluarga jugaa. Terutama buat mamah, papah, kak cicii, bang ijenn jugaa tentunya untuk ipaa.",
            "Jadilah sarjana yang bisa membanggakan mamaa sama papah di kemudian hari ini.",
            "Ngga usah memikirkan aku lagi kedepannya, pasti juga kamu bakal lupa dengan sendirinya, aku juga fokus sama masa depan aku dan karir aku sendiri, aku bakal kembangin skill dan terus belajar menjadi pribadi ku yang lebih dewasa serta mandiri. Aku pernah bilang suatu hari nanti aku ingin berdiri sejajar dengan kamu sebagai \"Bachelor of informatics engineering\". Aku akan tetap perjuangin langkah aku itu, bukan untuk membuatmu menunggu, melainkan untuk memenuhinya tanggung jawabku terhadap masa depanku sendiri.",
            "Setelah ini, aku ngga akan menganggu kamu atau mencari jalan sendiri untuk menghubungi kamu. Sorotan yang kamu minta aku arsipkan dan aku simpan di dalam suatu Drive kuu, aku mau jujur... aku belum bisa menghapus semua cerita kita baik di history maupun foto/video tentang kamu. Bukan karena perasaanku langsung menghilang, tetapi karena aku menghargai keputusan mu.",
            "Aku pernah berharap kita bisa bertahan selama mungkin, bahkan sampai bertahun tahun ke depan, kamu pernah bilang juga 5 tahun ya? Sampe kamu wisuda nanti, aku bakal rayain kamu semeriah apapun HAHAHA, aku juga masih berharap kamu bisa ngucapin ulang tahun aku nanti. Tapi seru juga yaa masa masa kita di SMK kemarinn, awal aku mencoba dekat sama kamu dengan secangkir matchaa yang aku beli di cafe di jalan harapan raya sampe akhirnya, 01 MEI - 13 OKTOBER 2026 itu harus asingg atas semua cerita dan kenangannya. Aku masih berharap semoga kamu masih ingat hari kelahiran kuu di tahun besok, di tanggal 13 januari semoga kamu masih ingatt akan hal itu. 06 Maret 27 yaa? Aku ga akan lupa hari special itu lagi. Ternyata secepat itu waktu membawa kita ke jalan yang berbeda. Meskipun begituz aku ngga menyesali bahwa aku pernah mengenal dan menyayangimu. Aku membuat ini semua bukan untuk mengemis kembali perasaan ku, aku ingin mengungkapkan perasaan akuu, aku udah tauu kamu ngga akan memberi kesempatan 3 untuk memperbaiki nya, aku juga ngga memaksa harus menjalani hubungannya lagi. Cuma kalo diberi kesempatan waktu, bukalah blok ig aku di Ig first kamuu, perasaan aku udah aku pendam untuk kembali menjalin hubungan. Aku cuma mau kita masih bisa komunikasi biasaa tanpa ada perasaan diantara nya.",
            "Aku tau kamu ngga akan memberikan ruang kesempatan untuk ke tiga kalinya untuk menjalin/memperbaiki hubungannya, tapii kalo dikasih 1 kesempatan.. aku cuma mau tetap bisa komunikasi biasa lewat ig first kamuuu, itu udah cukup buat akuu.",
            "Thankk uu for being part of my life i genuinely wish you happiness and succes in everything your pursue. Selamat menempuh jalan terbarumu, titik.",
            "Dunia lamaku, semoga kamu tumbuh menjadi versi terbaik dari dirimu. Aku akan melanjutkan jalanku sendiri, dan kamu dengan jalan mu.",
            "Take care, and i wish you nothing but the best! See you in the best version of each one.",
            "ranggaa"
        ]
    };

    // ----------------------------------------------------------------------
    // 2. STATE & DOM ELEMENTS
    // ----------------------------------------------------------------------
    let currentPage = 0;
    let pages = [];
    let isOpening = false;

    const envelopeSection = document.getElementById('envelopeSection');
    const envelope = document.getElementById('envelope');
    const letterSection = document.getElementById('letterSection');
    const letterBody = document.getElementById('letterBody');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const particlesContainer = document.getElementById('particles');
    const smokeContainer = document.getElementById('smokeContainer');
    
    // Audio Control
    const bgAudio = document.getElementById('bgAudio');
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const soundIcon = document.getElementById('soundIcon');
    const soundText = document.getElementById('soundText');
    let isPlaying = false;

    // ----------------------------------------------------------------------
    // 3. SOUND CONTROL
    // ----------------------------------------------------------------------
    function toggleSound() {
        if (isPlaying) {
            bgAudio.pause();
            soundIcon.textContent = '🔇';
            soundText.textContent = 'Musik';
            isPlaying = false;
        } else {
            bgAudio.play().then(() => {
                soundIcon.textContent = '🎵';
                soundText.textContent = 'Putar';
                isPlaying = true;
            }).catch(err => console.log("Audio blocked:", err));
        }
    }

    soundToggleBtn.addEventListener('click', toggleSound);

    // ----------------------------------------------------------------------
    // 4. PARTICLES
    // ----------------------------------------------------------------------
    function initParticles() {
        const particleCount = window.innerWidth < 480 ? 12 : 25;
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
            particle.style.animationDelay = `${Math.random() * 4}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // ----------------------------------------------------------------------
    // 5. PAGINATION
    // ----------------------------------------------------------------------
    function preparePages() {
        pages = [];
        const paragraphs = LETTER_DATA.paragraphs;
        const isMobile = window.innerWidth < 480;
        const paragraphsPerPage = isMobile ? 2 : 3;

        for (let i = 0; i < paragraphs.length; i += paragraphsPerPage) {
            pages.push(paragraphs.slice(i, i + paragraphsPerPage));
        }

        pages.push({
            isClosing: true,
            title: "take care.",
            quote: "may life lead us to the best version of ourselves."
        });
    }

    function renderPage(pageIndex) {
        letterBody.classList.add('page-fade-out');

        setTimeout(() => {
            letterBody.innerHTML = '';
            const pageData = pages[pageIndex];

            if (pageData && pageData.isClosing) {
                const closingDiv = document.createElement('div');
                closingDiv.className = 'closing-container';
                
                const title = document.createElement('h2');
                title.className = 'closing-title';
                title.textContent = pageData.title;

                const quote = document.createElement('p');
                quote.className = 'closing-quote';
                quote.textContent = pageData.quote;

                closingDiv.appendChild(title);
                closingDiv.appendChild(quote);
                letterBody.appendChild(closingDiv);
            } else if (Array.isArray(pageData)) {
                pageData.forEach(pText => {
                    const p = document.createElement('p');
                    p.textContent = pText;
                    letterBody.appendChild(p);
                });
            }

            const totalPages = pages.length;
            pageIndicator.textContent = `${String(pageIndex + 1).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;

            prevBtn.disabled = pageIndex === 0;
            nextBtn.disabled = pageIndex === totalPages - 1;

            letterBody.classList.remove('page-fade-out');
            letterBody.classList.add('page-fade-in');
        }, 300);
    }

    function nextPage() {
        if (currentPage < pages.length - 1) {
            currentPage++;
            renderPage(currentPage);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            renderPage(currentPage);
        }
    }

    // ----------------------------------------------------------------------
    // 6. SMOKE EFFECT
    // ----------------------------------------------------------------------
    function triggerSmokeEffect() {
        smokeContainer.innerHTML = '';
        for (let i = 0; i < 14; i++) {
            setTimeout(() => {
                const smoke = document.createElement('div');
                smoke.className = 'smoke-particle';
                smoke.style.setProperty('--rand-x', (Math.random() - 0.5).toString());
                smokeContainer.appendChild(smoke);

                setTimeout(() => smoke.remove(), 2800);
            }, i * 110);
        }
    }

    // ----------------------------------------------------------------------
    // 7. OPEN ENVELOPE
    // ----------------------------------------------------------------------
    function openEnvelope() {
        if (isOpening) return;
        isOpening = true;

        bgAudio.play().then(() => {
            soundIcon.textContent = '🎵';
            soundText.textContent = 'Putar';
            isPlaying = true;
        }).catch(err => console.log("Autoplay blocked:", err));

        envelope.classList.add('opening');
        triggerSmokeEffect();

        setTimeout(() => {
            envelopeSection.style.opacity = '0';
            envelopeSection.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                envelopeSection.style.display = 'none';
                letterSection.classList.remove('hidden');

                requestAnimationFrame(() => {
                    letterSection.style.opacity = '1';
                    letterSection.style.transform = 'translateY(0)';
                });

                preparePages();
                renderPage(0);
            }, 600);
        }, 1200);
    }

    // ----------------------------------------------------------------------
    // 8. LISTENERS
    // ----------------------------------------------------------------------
    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEnvelope();
        }
    });

    nextBtn.addEventListener('click', nextPage);
    prevBtn.addEventListener('click', prevPage);

    document.addEventListener('keydown', (e) => {
        if (letterSection.classList.contains('hidden')) return;
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
    });

    initParticles();
});