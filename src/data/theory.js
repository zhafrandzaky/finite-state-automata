export const THEORY = [
    {
        id: 'apa-itu-fsa',
        title: 'Apa itu FSA?',
        icon: 'bot',
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
]
