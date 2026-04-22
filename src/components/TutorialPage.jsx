import { useState } from 'react'
import {
    Bot, Settings2, CircleDot, Table2, Scale, PlayCircle,
    Rocket, ChevronLeft, ChevronRight,
} from 'lucide-react'
import TheorySection from './TheorySection'
import { THEORY } from '../data/theory'
import { DFAS } from '../data/dfas'
import { btnStyle } from '../styles'

const THEORY_ICONS = {
    bot: <Bot size={16} />,
    settings: <Settings2 size={16} />,
    'circle-dot': <CircleDot size={16} />,
    table: <Table2 size={16} />,
    scale: <Scale size={16} />,
    play: <PlayCircle size={16} />,
}

export default function TutorialPage({ setPage, setSoalTab }) {
    const [theoryIdx, setTheoryIdx] = useState(0)

    return (
        <div>
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <div
                    style={{
                        display: 'inline-block',
                        background: 'rgba(108,99,255,0.12)',
                        border: '1px solid rgba(108,99,255,0.35)',
                        color: '#9d97ff',
                        fontSize: 11,
                        letterSpacing: 2,
                        padding: '4px 16px',
                        borderRadius: 20,
                        marginBottom: 14,
                        fontFamily: 'monospace',
                    }}
                >
                    TEORI BAHASA & AUTOMATA
                </div>
                <h1
                    style={{
                        fontSize: 'clamp(28px,6vw,46px)',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg,#fff 30%,#6c63ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1.15,
                        marginBottom: 12,
                    }}
                >
                    Finite State Automata
                    <br />— Panduan Lengkap
                </h1>
                <p
                    style={{
                        color: '#6b7299',
                        fontSize: 15,
                        lineHeight: 1.7,
                        maxWidth: 540,
                        margin: '0 auto 28px',
                    }}
                >
                    Pelajari konsep FSA dari dasar hingga mahir. Dilengkapi
                    simulasi interaktif untuk 3 soal Tugas 2.
                </p>
                <div
                    style={{
                        display: 'flex',
                        gap: 10,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {THEORY.map((t, idx) => (
                        <button
                            key={idx}
                            onClick={() => setTheoryIdx(idx)}
                            style={{
                                background:
                                    theoryIdx === idx ? '#6c63ff' : '#10152a',
                                border: `1px solid ${theoryIdx === idx ? '#6c63ff' : '#1e2240'}`,
                                color:
                                    theoryIdx === idx ? '#fff' : '#8a8fb0',
                                padding: '8px 16px',
                                borderRadius: 10,
                                cursor: 'pointer',
                                fontSize: 13,
                                fontWeight: 600,
                                fontFamily: 'sans-serif',
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                            }}
                        >
                            {THEORY_ICONS[t.icon]}
                            {t.tabLabel ?? t.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Theory content */}
            <div
                style={{
                    background: '#0d1124',
                    border: '1px solid #1e2240',
                    borderRadius: 16,
                    padding: '28px 30px',
                }}
            >
                <TheorySection section={THEORY[theoryIdx]} />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 24,
                        paddingTop: 20,
                        borderTop: '1px solid #1e2240',
                    }}
                >
                    <button
                        onClick={() =>
                            setTheoryIdx((i) => Math.max(0, i - 1))
                        }
                        disabled={theoryIdx === 0}
                        style={{
                            ...btnStyle(theoryIdx === 0),
                            background:
                                theoryIdx === 0 ? '#10152a' : '#1e2240',
                            color: theoryIdx === 0 ? '#3a4070' : '#8a8fb0',
                        }}
                    >
                        <ChevronLeft size={15} /> Sebelumnya
                    </button>
                    <span
                        style={{
                            color: '#3a4070',
                            fontSize: 13,
                            alignSelf: 'center',
                            fontFamily: 'monospace',
                        }}
                    >
                        {theoryIdx + 1} / {THEORY.length}
                    </span>
                    {theoryIdx < THEORY.length - 1 ? (
                        <button
                            onClick={() => setTheoryIdx((i) => i + 1)}
                            style={btnStyle(false)}
                        >
                            Selanjutnya <ChevronRight size={15} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setPage('soal-0')}
                            style={btnStyle(false)}
                        >
                            <Rocket size={14} /> Ke Simulasi →
                        </button>
                    )}
                </div>
            </div>

            {/* Quick nav cards */}
            <div style={{ marginTop: 32 }}>
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
                    Langsung ke Soal:
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fit,minmax(240px,1fr))',
                        gap: 14,
                    }}
                >
                    {DFAS.map((d) => (
                        <div
                            key={d.id}
                            onClick={() => {
                                setPage(`soal-${d.id}`)
                                setSoalTab('diagram')
                            }}
                            style={{
                                background: '#0d1124',
                                border: '1px solid #1e2240',
                                borderRadius: 14,
                                padding: '18px 20px',
                                cursor: 'pointer',
                                transition: 'border-color 0.2s',
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.borderColor = '#6c63ff')
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.borderColor = '#1e2240')
                            }
                        >
                            <div
                                style={{
                                    fontSize: 11,
                                    color: '#6c63ff',
                                    fontFamily: 'monospace',
                                    letterSpacing: 1,
                                    marginBottom: 6,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {d.soal}
                            </div>
                            <div
                                style={{
                                    fontWeight: 700,
                                    color: '#e8eaf6',
                                    fontSize: 15,
                                    marginBottom: 6,
                                }}
                            >
                                {d.title}
                            </div>
                            <div
                                style={{
                                    color: '#6b7299',
                                    fontSize: 12,
                                }}
                            >
                                Q={`{${d.states.join(',')}}`} &nbsp;Σ=
                                {`{${d.alphabet.join(',')}}`}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
