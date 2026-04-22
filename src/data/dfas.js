export const DFAS = [
    {
        id: 0,
        soal: 'Soal 1',
        title: 'Diagram → Tabel Transisi',
        task: 'Buatlah tabel transisi dari diagram DFA berikut.',
        states: ['q₀', 'q₁', 'q₂', 'q₃'],
        alphabet: ['0', '1'],
        start: 0,
        finals: [0],
        delta: {
            0: { 0: 2, 1: 1 },
            1: { 0: 3, 1: 0 },
            2: { 0: 0, 1: 3 },
            3: { 0: 1, 1: 2 },
        },
        nodePos: [
            { x: 150, y: 130 },
            { x: 310, y: 130 },
            { x: 150, y: 250 },
            { x: 310, y: 250 },
        ],
        explanation:
            "DFA ini menerima string biner yang mengandung jumlah '1' genap. State q₀ = genap (final), q₁ = ganjil, q₂/q₃ = state intermediate.",
    },
    {
        id: 1,
        soal: 'Soal 2',
        title: 'Tabel → Diagram Transisi',
        task: 'Gambarkan diagram transisi dari DFA berikut.',
        states: ['q₀', 'q₁', 'q₂'],
        alphabet: ['a', 'b'],
        start: 0,
        finals: [0],
        delta: { 0: { a: 1, b: 2 }, 1: { a: 2, b: 0 }, 2: { a: 2, b: 2 } },
        nodePos: [
            { x: 120, y: 160 },
            { x: 270, y: 90 },
            { x: 270, y: 230 },
        ],
        explanation:
            "DFA ini menerima string atas {a,b} yang jumlah 'ab'-nya genap. State q₂ adalah dead state — sekali masuk tidak bisa diterima.",
    },
    {
        id: 2,
        soal: 'Soal 3',
        title: 'Tabel → Diagram Transisi',
        task: 'Gambarkan diagram transisi dari DFA berikut.',
        states: ['q₀', 'q₁', 'q₂', 'q₃'],
        alphabet: ['a', 'b'],
        start: 0,
        finals: [0, 1, 2],
        delta: {
            0: { a: 0, b: 1 },
            1: { a: 0, b: 2 },
            2: { a: 0, b: 3 },
            3: { a: 3, b: 2 },
        },
        nodePos: [
            { x: 80, y: 160 },
            { x: 210, y: 160 },
            { x: 340, y: 160 },
            { x: 420, y: 160 },
        ],
        explanation:
            "DFA ini menerima string atas {a,b} yang tidak mengandung 'bbb' (tiga b berturut-turut). q₃ adalah trap state untuk pola bbb.",
    },
]
