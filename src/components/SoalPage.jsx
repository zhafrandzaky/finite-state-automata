import { useState } from 'react'
import { CircleDot, Table2, FlaskConical, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'
import FSACanvas from './FSACanvas'
import TransitionTable from './TransitionTable'
import StringTester from './StringTester'
import ExampleChip from './ExampleChip'
import { DFAS } from '../data/dfas'
import { btnStyle } from '../styles'

export default function SoalPage({ activeDFA, setPage, setSoalTab }) {
    const [soalTab, setSoalTabLocal] = useState('diagram')

    const handleSetTab = (tab) => {
        setSoalTabLocal(tab)
        setSoalTab(tab)
    }

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: 28 }}>
                <div
                    style={{
                        fontSize: 11,
                        color: '#6c63ff',
                        fontFamily: 'monospace',
                        letterSpacing: 2,
                        marginBottom: 8,
                        textTransform: 'uppercase',
                    }}
                >
                    {activeDFA.soal}
                </div>
                <h1
                    style={{
                        fontSize: 26,
                        fontWeight: 800,
                        color: '#e8eaf6',
                        marginBottom: 6,
                    }}
                >
                    {activeDFA.title}
                </h1>
                <p
                    style={{
                        color: '#6b7299',
                        fontSize: 14,
                        marginBottom: 16,
                    }}
                >
                    {activeDFA.task}
                </p>
                {/* Spec chips */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {[
                        ['Q (States)', `{${activeDFA.states.join(',')}}`],
                        ['Σ (Alfabet)', `{${activeDFA.alphabet.join(',')}}`],
                        ['S (Start)', activeDFA.states[activeDFA.start]],
                        [
                            'F (Final)',
                            `{${activeDFA.finals.map((f) => activeDFA.states[f]).join(',')}}`,
                        ],
                    ].map(([label, val]) => (
                        <div
                            key={label}
                            style={{
                                background: '#0d1124',
                                border: '1px solid #1e2240',
                                borderRadius: 10,
                                padding: '8px 14px',
                                fontFamily: 'monospace',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 10,
                                    color: '#3a4070',
                                    marginBottom: 2,
                                }}
                            >
                                {label}
                            </div>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: '#c8cbea',
                                    fontWeight: 700,
                                }}
                            >
                                {val}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sub tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                {[
                    ['diagram', 'Diagram', <CircleDot size={14} />],
                    ['tabel', 'Tabel Transisi', <Table2 size={14} />],
                    ['uji', 'Uji String', <FlaskConical size={14} />],
                ].map(([id, label, icon]) => (
                    <button
                        key={id}
                        onClick={() => handleSetTab(id)}
                        style={{
                            background:
                                soalTab === id ? '#6c63ff' : '#10152a',
                            border: `1px solid ${soalTab === id ? '#6c63ff' : '#1e2240'}`,
                            color: soalTab === id ? '#fff' : '#6b7299',
                            padding: '9px 18px',
                            borderRadius: 10,
                            cursor: 'pointer',
                            fontSize: 13,
                            fontWeight: 700,
                            fontFamily: 'sans-serif',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                        }}
                    >
                        {icon} {label}
                    </button>
                ))}
            </div>

            <div
                style={{
                    background: '#0d1124',
                    border: '1px solid #1e2240',
                    borderRadius: 16,
                    padding: '24px',
                }}
            >
                {soalTab === 'diagram' && (
                    <div>
                        <div
                            style={{
                                fontSize: 13,
                                color: '#3a4070',
                                fontFamily: 'monospace',
                                letterSpacing: 1,
                                marginBottom: 16,
                                textTransform: 'uppercase',
                            }}
                        >
                            Diagram Transisi
                        </div>
                        <FSACanvas dfa={activeDFA} />
                        <div
                            style={{
                                marginTop: 16,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 16,
                            }}
                        >
                            {[
                                ['State Awal (S)', '#f9ca24'],
                                ['Final State (F)', '#43e97b'],
                                ['Start + Final', '#43c6ff'],
                                ['State Biasa', '#3a4070'],
                            ].map(([l, c]) => (
                                <div
                                    key={l}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 7,
                                        fontSize: 12,
                                        color: '#6b7299',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            border: `2px solid ${c}`,
                                            background:
                                                c === '#3a4070'
                                                    ? 'transparent'
                                                    : `${c}20`,
                                        }}
                                    />
                                    {l}
                                </div>
                            ))}
                        </div>
                        {/* Fungsi transisi daftar */}
                        <div
                            style={{
                                marginTop: 24,
                                background: '#080c1a',
                                borderRadius: 12,
                                padding: '16px 20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 11,
                                    color: '#3a4070',
                                    fontFamily: 'monospace',
                                    letterSpacing: 1,
                                    marginBottom: 12,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Fungsi Transisi δ:
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fill,minmax(190px,1fr))',
                                    gap: 8,
                                }}
                            >
                                {activeDFA.states.map((s, i) =>
                                    activeDFA.alphabet.map((sym) => (
                                        <code
                                            key={`${i}-${sym}`}
                                            style={{
                                                background: '#10152a',
                                                border: '1px solid #1e2240',
                                                borderRadius: 8,
                                                padding: '5px 12px',
                                                fontSize: 12,
                                                color: '#a9a3ff',
                                                fontFamily: 'monospace',
                                            }}
                                        >
                                            δ({s},{sym}) ={' '}
                                            {
                                                activeDFA.states[
                                                    activeDFA.delta[i][sym]
                                                ]
                                            }
                                        </code>
                                    )),
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {soalTab === 'tabel' && (
                    <div>
                        <div
                            style={{
                                fontSize: 13,
                                color: '#3a4070',
                                fontFamily: 'monospace',
                                letterSpacing: 1,
                                marginBottom: 16,
                                textTransform: 'uppercase',
                            }}
                        >
                            Tabel Transisi (δ)
                        </div>
                        <TransitionTable dfa={activeDFA} />
                        <div
                            style={{
                                marginTop: 24,
                                background: '#080c1a',
                                borderRadius: 12,
                                padding: '16px 20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 12,
                                    color: '#3a4070',
                                    fontFamily: 'monospace',
                                    letterSpacing: 1,
                                    marginBottom: 10,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Cara Membaca Tabel:
                            </div>
                            <div
                                style={{
                                    color: '#8a8fb0',
                                    fontSize: 13,
                                    lineHeight: 1.9,
                                }}
                            >
                                • Baris = state asal &nbsp;|&nbsp; Kolom =
                                simbol input &nbsp;|&nbsp; Isi sel = state
                                tujuan
                                <br />• Tanda{' '}
                                <span style={{ color: '#f9ca24' }}>→</span> di
                                depan state menunjukkan initial state
                                <br />• Tanda{' '}
                                <span style={{ color: '#43e97b' }}>*</span> di
                                depan state menunjukkan final/accepting state
                                <br />• Contoh membaca: baris q₀, kolom '
                                {activeDFA.alphabet[0]}' → state tujuan adalah{' '}
                                {
                                    activeDFA.states[
                                        activeDFA.delta[0][activeDFA.alphabet[0]]
                                    ]
                                }
                            </div>
                        </div>
                    </div>
                )}

                {soalTab === 'uji' && (
                    <div>
                        <div
                            style={{
                                fontSize: 13,
                                color: '#3a4070',
                                fontFamily: 'monospace',
                                letterSpacing: 1,
                                marginBottom: 8,
                                textTransform: 'uppercase',
                            }}
                        >
                            Uji String Input
                        </div>
                        <p
                            style={{
                                color: '#6b7299',
                                fontSize: 13,
                                lineHeight: 1.7,
                                marginBottom: 20,
                            }}
                        >
                            Masukkan string dari alfabet{' '}
                            {`{${activeDFA.alphabet.join(',')}}`} untuk diuji
                            apakah diterima atau ditolak oleh DFA ini. Animasi
                            akan menunjukkan jalur eksekusi langkah per langkah.
                        </p>
                        <StringTester dfa={activeDFA} />
                        <div
                            style={{
                                marginTop: 24,
                                background: '#080c1a',
                                borderRadius: 12,
                                padding: '16px 20px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 11,
                                    color: '#3a4070',
                                    fontFamily: 'monospace',
                                    letterSpacing: 1,
                                    marginBottom: 10,
                                    textTransform: 'uppercase',
                                }}
                            >
                                <Lightbulb size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} /> Penjelasan DFA ini:
                            </div>
                            <p
                                style={{
                                    color: '#8a8fb0',
                                    fontSize: 13,
                                    lineHeight: 1.8,
                                }}
                            >
                                {activeDFA.explanation}
                            </p>
                            <div style={{ marginTop: 12 }}>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: '#3a4070',
                                        fontFamily: 'monospace',
                                        marginBottom: 8,
                                    }}
                                >
                                    Contoh string untuk dicoba:
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: 8,
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {activeDFA.examples
                                        ? activeDFA.examples.map((s) => <ExampleChip key={s} str={s} />)
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Nav between soals */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}
            >
                <button
                    onClick={() => setPage('tutorial')}
                    style={{
                        ...btnStyle(false),
                        background: '#10152a',
                        color: '#6b7299',
                    }}
                >
                    <ChevronLeft size={15} /> Tutorial
                </button>
                <div style={{ display: 'flex', gap: 10 }}>
                    {activeDFA.id > 0 && (
                        <button
                            onClick={() =>
                                setPage(`soal-${activeDFA.id - 1}`)
                            }
                            style={{
                                ...btnStyle(false),
                                background: '#1e2240',
                                color: '#8a8fb0',
                            }}
                        >
                            <ChevronLeft size={15} /> {DFAS[activeDFA.id - 1].soal}
                        </button>
                    )}
                    {activeDFA.id < DFAS.length - 1 && (
                        <button
                            onClick={() =>
                                setPage(`soal-${activeDFA.id + 1}`)
                            }
                            style={btnStyle(false)}
                        >
                            {DFAS[activeDFA.id + 1].soal} <ChevronRight size={15} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
