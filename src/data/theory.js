export const THEORY = [
    {
        id: 'apa-itu-fsa',
        title: 'Apa itu FSA?',
        icon: 'bot',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'Finite State Automata (FSA) atau Otomata Berhingga adalah sebuah model matematika dari suatu sistem yang menerima input dan output diskrit. FSA bukan mesin fisik, melainkan konsep abstrak yang sangat berguna dalam ilmu komputer teoritis.',
            },
            {
                type: 'highlight',
                body: 'FSA merupakan mesin otomata dari bahasa reguler. Ia memiliki jumlah state yang berhingga (terbatas), dan dapat berpindah dari satu state ke state lain berdasarkan simbol input yang diterima.',
            },
            {
                type: 'text',
                body: 'Bayangkan FSA seperti sebuah lampu lalu lintas: ia hanya memiliki beberapa kondisi (merah, kuning, hijau), dan berpindah antar kondisi berdasarkan aturan tertentu. Sederhana namun sangat powerful!',
            },
            {
                type: 'analogy',
                title: 'Analogi Sehari-hari',
                items: [
                    {
                        icon: 'traffic-cone',
                        text: 'Lampu lalu lintas: state = warna lampu, input = timer/sensor',
                    },
                    {
                        icon: 'credit-card',
                        text: 'ATM: state = menu aktif, input = tombol yang ditekan',
                    },
                    {
                        icon: 'lock',
                        text: 'Kunci kombinasi: state = digit terakhir, input = digit berikutnya',
                    },
                    {
                        icon: 'smartphone',
                        text: 'Telepon: state = on/off/call, input = tombol',
                    },
                ],
            },
        ],
    },
    {
        id: 'komponen-fsa',
        title: 'Komponen FSA (5-Tupel)',
        tabLabel: 'Komponen',
        icon: 'settings',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'Secara formal, sebuah FSA dinyatakan oleh 5-tupel M = (Q, Σ, δ, S, F). Kelima elemen ini mendefinisikan sepenuhnya perilaku sebuah automata.',
            },
            {
                type: 'components',
                items: [
                    {
                        symbol: 'Q',
                        name: 'Himpunan State',
                        desc: 'Kumpulan semua state/kedudukan yang mungkin ada dalam automata. Himpunan ini harus berhingga (finite).',
                        example: 'Q = {q₀, q₁, q₂, q₃}',
                        color: '#6c63ff',
                    },
                    {
                        symbol: 'Σ',
                        name: 'Alfabet Input',
                        desc: 'Himpunan simbol input yang dikenali oleh automata. Disebut juga alphabet atau himpunan masukan.',
                        example: 'Σ = {0, 1} atau Σ = {a, b}',
                        color: '#ff6584',
                    },
                    {
                        symbol: 'δ',
                        name: 'Fungsi Transisi',
                        desc: 'Fungsi yang menentukan state berikutnya berdasarkan state saat ini dan simbol input. δ: Q × Σ → Q',
                        example: 'δ(q₀, 1) = q₁',
                        color: '#43e97b',
                    },
                    {
                        symbol: 'S',
                        name: 'State Awal',
                        desc: 'State tempat automata memulai komputasi. Hanya ada satu state awal, ditandai dengan panah masuk.',
                        example: 'S = q₀',
                        color: '#f9ca24',
                    },
                    {
                        symbol: 'F',
                        name: 'Himpunan State Akhir',
                        desc: 'Kumpulan state yang menandakan string diterima jika komputasi berakhir di sini. Bisa lebih dari satu.',
                        example: 'F = {q₂} atau F = {q₀, q₁}',
                        color: '#43c6ff',
                    },
                ],
            },
        ],
    },
    {
        id: 'diagram-transisi',
        title: 'Diagram Transisi',
        icon: 'circle-dot',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'Diagram transisi adalah representasi visual dari sebuah FSA menggunakan graf berarah. Ini adalah cara paling intuitif untuk memahami cara kerja automata.',
            },
            {
                type: 'diagram-legend',
                items: [
                    {
                        visual: 'circle',
                        label: 'Lingkaran tunggal',
                        desc: 'Menyatakan state biasa',
                    },
                    {
                        visual: 'double-circle',
                        label: 'Lingkaran ganda',
                        desc: 'Menyatakan state akhir (final state)',
                    },
                    {
                        visual: 'arrow-in',
                        label: 'Panah masuk tanpa sumber',
                        desc: 'Menunjukkan state awal',
                    },
                    {
                        visual: 'arrow',
                        label: 'Busur/panah berarah',
                        desc: 'Menyatakan transisi antar state',
                    },
                    {
                        visual: 'self-loop',
                        label: 'Panah ke diri sendiri',
                        desc: 'State tetap sama setelah baca input',
                    },
                    {
                        visual: 'label',
                        label: 'Label pada busur',
                        desc: 'Simbol input yang memicu transisi',
                    },
                ],
            },
        ],
    },
    {
        id: 'tabel-transisi',
        title: 'Tabel Transisi',
        icon: 'table',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'Tabel transisi adalah representasi tabular dari fungsi transisi δ. Baris mewakili state, kolom mewakili simbol input, dan isi sel adalah state tujuan.',
            },
            {
                type: 'table-example',
                title: 'Contoh tabel transisi DFA dengan Σ={a,b}:',
                headers: ['δ', 'a', 'b'],
                rows: [
                    ['→*q₀', 'q₀', 'q₁', 'start+final'],
                    ['q₁', 'q₁', 'q₀', 'normal'],
                ],
                legend: [
                    { symbol: '→', desc: 'State awal' },
                    { symbol: '*', desc: 'State akhir (final)' },
                    { symbol: '→*', desc: 'State awal sekaligus akhir' },
                ],
            },
            {
                type: 'text',
                body: 'Tabel dan diagram transisi saling dapat dikonversi satu sama lain. Tugas 2 kalian adalah berlatih konversi antara keduanya!',
            },
        ],
    },
    {
        id: 'dfa-vs-nfa',
        title: 'DFA vs NFA',
        icon: 'scale',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'Ada dua jenis FSA: Deterministic Finite Automata (DFA) dan Non-Deterministic Finite Automata (NFA). Keduanya memiliki kekuatan yang setara, namun berbeda dalam cara kerjanya.',
            },
            {
                type: 'comparison',
                left: {
                    title: 'DFA',
                    color: '#6c63ff',
                    points: [
                        'Setiap state memiliki tepat SATU transisi untuk setiap simbol input',
                        'Tidak ada ambiguitas — selalu jelas state mana yang dituju',
                        'Lebih mudah diimplementasikan',
                        'Setiap input menghasilkan tepat satu jalur eksekusi',
                    ],
                },
                right: {
                    title: 'NFA',
                    color: '#ff6584',
                    points: [
                        'State boleh memiliki NOL atau LEBIH transisi untuk satu simbol',
                        'Bisa ada multiple state aktif secara bersamaan',
                        'Lebih mudah dirancang untuk pola tertentu',
                        'Dapat dikonversi ke DFA yang ekuivalen',
                    ],
                },
            },
            {
                type: 'highlight',
                body: 'Materi Tugas 2 berfokus pada DFA. Setiap soal memiliki tepat satu transisi per state per simbol input.',
            },
        ],
    },
    {
        id: 'cara-kerja',
        title: 'Cara Kerja: Membaca String',
        tabLabel: 'Cara Kerja',
        icon: 'play',
        pertemuan: 5,
        content: [
            {
                type: 'text',
                body: 'FSA memproses string input dengan membacanya karakter per karakter dari kiri ke kanan. Di setiap langkah, mesin berpindah state sesuai fungsi transisi.',
            },
            {
                type: 'steps',
                items: [
                    {
                        step: '1',
                        title: 'Mulai di State Awal',
                        desc: 'Mesin selalu memulai di state S (initial state). Belum ada input yang dibaca.',
                    },
                    {
                        step: '2',
                        title: 'Baca Karakter',
                        desc: 'Ambil karakter pertama dari string input. Karakter ini harus ada di alfabet Σ.',
                    },
                    {
                        step: '3',
                        title: 'Aplikasikan Fungsi Transisi',
                        desc: 'Gunakan δ(state_sekarang, karakter) untuk menentukan state berikutnya.',
                    },
                    {
                        step: '4',
                        title: 'Pindah ke State Berikutnya',
                        desc: 'State sekarang berubah menjadi hasil dari fungsi transisi.',
                    },
                    {
                        step: '5',
                        title: 'Ulangi atau Selesai',
                        desc: 'Jika masih ada karakter, kembali ke langkah 2. Jika sudah habis, lanjut ke langkah 6.',
                    },
                    {
                        step: '6',
                        title: 'Keputusan Akhir',
                        desc: 'Jika state terakhir ∈ F → DITERIMA. Jika tidak → DITOLAK.',
                    },
                ],
            },
            {
                type: 'example-trace',
                title: "Contoh: String '011' pada DFA Soal 1 (Q={q₀..q₃}, Σ={0,1}, F={q₀})",
                steps: [
                    { from: '—', input: '—', to: 'q₀', note: 'State awal' },
                    { from: 'q₀', input: '0', to: 'q₂', note: 'δ(q₀,0)=q₂' },
                    { from: 'q₂', input: '1', to: 'q₃', note: 'δ(q₂,1)=q₃' },
                    { from: 'q₃', input: '1', to: 'q₂', note: 'δ(q₃,1)=q₂' },
                ],
                result: 'DITOLAK',
                reason: 'q₂ bukan final state',
            },
        ],
    },
    {
        id: 'representasi',
        title: 'Representasi Automata',
        icon: 'layout-list',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Sebuah DFA dapat direpresentasikan dalam dua bentuk yang saling ekuivalen: Tabel Transisi dan Diagram Transisi. Keduanya menyimpan informasi yang sama, namun cocok untuk konteks yang berbeda.',
            },
            {
                type: 'comparison',
                left: {
                    title: 'Tabel Transisi',
                    color: '#6c63ff',
                    points: [
                        'Bentuk tabular matriks dua dimensi',
                        'Sistematis dan matematis — mudah ditulis secara formal',
                        'Efisien untuk dikodekan dan diproses oleh program komputer',
                        'Kelemahan: kurang intuitif bagi manusia untuk mensimulasikan rute panjang',
                    ],
                },
                right: {
                    title: 'Diagram Transisi',
                    color: '#43e97b',
                    points: [
                        'Bentuk representasi visual graf berarah',
                        'Intuitif — mudah dipahami secara sekilas',
                        'Sangat mudah ditelusuri pergerakan statenya secara manual',
                        'Kelemahan: terlihat sangat rumit jika jumlah state terlalu banyak',
                    ],
                },
            },
        ],
    },
    {
        id: 'matriks-tabel',
        title: 'Tabel Transisi: Definisi Matriks',
        icon: 'binary',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Tabel Transisi adalah format matriks dua dimensi dimana baris mewakili State saat ini, dan kolom mewakili himpunan Simbol Input yang diberikan.',
            },
            {
                type: 'highlight',
                body: 'Perpotongan antara baris dan kolom (isi sel matriks) mendeskripsikan secara pasti ke State Berikutnya mana mesin akan bergeser, mengikuti fungsi pemetaan transisi δ.',
            },
            {
                type: 'text',
                body: 'Simbol panah (->) menandakan awal eksekusi (start state), sedangkan tanda bintang (*) menandakan penerimaan akhir eksekusi (final state). Keduanya bisa muncul bersamaan.',
            },
            {
                type: 'table-example',
                title: 'Contoh struktur tabel dengan Σ={0,1}:',
                headers: ['State (δ)', 'Input 0', 'Input 1'],
                rows: [
                    ['→ q0 (Start)', '...', '...', 'normal'],
                    ['q1', 'q2', 'q1', 'normal'],
                    ['* q2 (Final)', '...', '...', 'normal'],
                ],
                legend: [
                    { symbol: '→', desc: 'Start state' },
                    { symbol: '*', desc: 'Final state' },
                    { symbol: '→*', desc: 'Start sekaligus Final' },
                ],
            },
        ],
    },
    {
        id: 'kenapa-konversi',
        title: 'Mengapa Konversi Penting?',
        icon: 'lightbulb',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Kemampuan mengkonversi antara tabel transisi dan diagram transisi adalah skill fundamental dalam Teori Bahasa dan Automata. Ada tiga alasan utama mengapa konversi ini penting.',
            },
            {
                type: 'analogy',
                title: 'Tiga Alasan Utama',
                items: [
                    {
                        icon: 'book-open',
                        text: 'Kognisi Manusia: otak memproses gambar visual jauh lebih cepat daripada angka-angka tabular matriks. Diagram mempercepat pemahaman secara signifikan.',
                    },
                    {
                        icon: 'book-open',
                        text: 'Deteksi Anomali: melalui diagram, kita mudah mengidentifikasi dead state atau state yang tidak dapat dicapai (unreachable state).',
                    },
                    {
                        icon: 'book-open',
                        text: 'Presentasi Efektif: konversi mutlak diperlukan untuk dokumentasi akademik, diskusi tim, dan pembelajaran di ruang kelas.',
                    },
                ],
            },
            {
                type: 'highlight',
                body: 'Tabel efisien untuk mesin — Diagram efisien untuk manusia. Menguasai keduanya berarti kamu bisa berkomunikasi di kedua domain sekaligus.',
            },
        ],
    },
    {
        id: 'komponen-visual',
        title: 'Komponen Visual Diagram',
        icon: 'shapes',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Diagram transisi dibangun dari komponen-komponen visual yang memiliki makna spesifik. Memahami setiap simbol adalah kunci membaca dan menggambar diagram dengan benar.',
            },
            {
                type: 'diagram-legend',
                items: [
                    { visual: 'circle',        label: 'State (Node)',        desc: 'Setiap entitas state digambar menggunakan sebuah lingkaran tunggal.' },
                    { visual: 'double-circle', label: 'State Akhir (Final)', desc: 'Ditandai dengan lingkaran konsentris ganda sebagai indikator Final State.' },
                    { visual: 'arrow-in',      label: 'State Awal (Start)',  desc: 'Ditandai dengan panah masuk dari ruang kosong tanpa node sumber.' },
                    { visual: 'arrow',         label: 'Transisi (Edge)',     desc: 'Dilukiskan sebagai panah berarah beserta penamaan karakter inputnya.' },
                    { visual: 'self-loop',     label: 'Self Loop',           desc: 'Panah yang kembali ke state yang sama, input tidak mengubah state.' },
                    { visual: 'label',         label: 'Label Input',         desc: 'Karakter atau simbol input yang ditulis sebagai label pada setiap busur panah.' },
                ],
            },
        ],
    },
    {
        id: 'langkah-konversi',
        title: 'Langkah-Langkah Konversi',
        icon: 'map',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Konversi dari Tabel Transisi ke Diagram Transisi mengikuti 4 langkah sistematis. Ikuti urutan ini untuk memastikan tidak ada informasi yang terlewat.',
            },
            {
                type: 'steps',
                items: [
                    {
                        step: '1',
                        title: 'Identifikasi Start State',
                        desc: 'Cari state yang ditandai → di kolom pertama tabel. Gambar lingkaran pertama, lalu beri panah lurus dari ruang kosong menujunya.',
                    },
                    {
                        step: '2',
                        title: 'Bentuk Semua Node',
                        desc: 'Gambar seluruh lingkaran (node) yang tersisa untuk setiap state yang terdaftar di kolom pertama tabel. Posisikan secara merata.',
                    },
                    {
                        step: '3',
                        title: 'Tarik Garis Transisi',
                        desc: 'Telusuri tabel baris per baris. Hubungkan antar node dengan panah berlabel simbol input sesuai kolomnya. Jika state tujuan = state asal, buat self-loop.',
                    },
                    {
                        step: '4',
                        title: 'Tandai Final State',
                        desc: 'Ubah lingkaran state biasa menjadi lingkaran ganda untuk semua state yang ditandai * di tabel. Ini adalah Final State / Accepting State.',
                    },
                ],
            },
            {
                type: 'highlight',
                body: 'Tip verifikasi: Jumlah total panah harus sama dengan (jumlah state) × (jumlah simbol alfabet). Jika tidak cocok, ada transisi yang terlewat.',
            },
        ],
    },
    {
        id: 'pemetaan-visual',
        title: 'Proses Pemetaan Visual',
        icon: 'pen-line',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Mari ikuti proses pemetaan manual dari tabel ke diagram menggunakan contoh konkret. DFA: Q={q0,q1,q2}, Σ={a,b}, S=q0, F={q2}.',
            },
            {
                type: 'table-example',
                title: 'Tabel transisi yang akan dikonversi:',
                headers: ['δ', 'a', 'b'],
                rows: [
                    ['→ q0', 'q0', 'q1', 'normal'],
                    ['q1', 'q2', 'q1', 'normal'],
                    ['* q2', 'q2', 'q2', 'normal'],
                ],
                legend: [
                    { symbol: '→', desc: 'q0 adalah start state' },
                    { symbol: '*', desc: 'q2 adalah final state' },
                ],
            },
            {
                type: 'steps',
                items: [
                    {
                        step: '1',
                        title: 'Mulai di q0',
                        desc: "q0 adalah Start State (→). Gambar lingkaran q0 dan beri panah masuk. Input 'a' self-loop ke q0 sendiri, input 'b' menuju q1.",
                    },
                    {
                        step: '2',
                        title: 'Lanjut ke q1',
                        desc: "Gambar lingkaran q1. Input 'b' self-loop ke q1 sendiri, input 'a' menuju q2. Tarik kedua panah tersebut.",
                    },
                    {
                        step: '3',
                        title: 'Terakhir q2',
                        desc: "Gambar lingkaran q2. Baik input 'a' maupun 'b' kembali ke q2 sendiri. Buat self-loop dengan label 'a,b'.",
                    },
                    {
                        step: '4',
                        title: 'Tandai Final',
                        desc: 'q2 ditandai * di tabel, jadi ubah lingkarannya menjadi lingkaran ganda. Diagram selesai dan siap diverifikasi.',
                    },
                ],
            },
            {
                type: 'example-trace',
                title: 'Verifikasi: 3 state × 2 simbol = 6 total transisi',
                steps: [
                    { from: 'q0', input: 'a', to: 'q0', note: 'self-loop' },
                    { from: 'q0', input: 'b', to: 'q1', note: 'menuju q1' },
                    { from: 'q1', input: 'a', to: 'q2', note: 'menuju q2' },
                    { from: 'q1', input: 'b', to: 'q1', note: 'self-loop' },
                    { from: 'q2', input: 'a', to: 'q2', note: 'self-loop' },
                    { from: 'q2', input: 'b', to: 'q2', note: 'self-loop' },
                ],
                result: '6 transisi',
                reason: 'semua terpetakan dengan benar',
            },
        ],
    },
    {
        id: 'verifikasi',
        title: 'Verifikasi Konversi',
        icon: 'check-circle-2',
        pertemuan: 6,
        content: [
            {
                type: 'text',
                body: 'Sebelum diagram dianggap selesai, lakukan checklist validasi untuk memastikan tidak ada informasi dari tabel yang tertinggal atau salah dipetakan.',
            },
            {
                type: 'steps',
                items: [
                    {
                        step: '1',
                        title: 'Validasi Node',
                        desc: 'Pastikan seluruh daftar state di kolom pertama tabel telah digambar menjadi lingkaran terpisah. Jumlah node di diagram = jumlah baris di tabel.',
                    },
                    {
                        step: '2',
                        title: 'Validasi Transisi',
                        desc: 'Setiap kemungkinan cabang input wajib digambar dengan label dan panahnya. Jumlah panah = jumlah state × jumlah simbol alfabet.',
                    },
                    {
                        step: '3',
                        title: 'Validasi Simbol Khusus',
                        desc: 'Pastikan Start state memiliki panah masuk dari luar (tanpa sumber), dan semua Final state menggunakan lingkaran ganda konsentris.',
                    },
                ],
            },
            {
                type: 'highlight',
                body: 'Konversi ini bukan sekadar tugas mekanis merubah bentuk, melainkan menerjemahkan abstraksi matematis ke dalam pemahaman yang jauh lebih intuitif.',
            },
        ],
    },
]
