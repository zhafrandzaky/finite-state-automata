import { useState } from 'react'
import { BookOpen } from 'lucide-react'
import TutorialPage from './components/TutorialPage'
import SoalPage from './components/SoalPage'
import { DFAS } from './data/dfas'

export default function App() {
    const [page, setPage] = useState('tutorial') // "tutorial" | "soal-0" ... "soal-4"
    const [soalTab, setSoalTab] = useState('diagram') // "diagram" | "tabel" | "uji"

    const activeDFA = page.startsWith('soal-')
        ? DFAS[parseInt(page.split('-')[1])]
        : null

    return (
        <div
            style={{
                fontFamily: 'sans-serif',
                background: '#080c1a',
                minHeight: '100vh',
                color: '#e8eaf6',
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;600;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080c1a; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #10152a; } ::-webkit-scrollbar-thumb { background: #2a3060; border-radius: 3px; }
        input:focus { border-color: #6c63ff !important; }
      `}</style>

            {/* Top Nav */}
            <nav
                style={{
                    borderBottom: '1px solid #1e2240',
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0,
                    overflowX: 'auto',
                    background: '#0a0e1e',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                }}
            >
                <div
                    style={{
                        fontWeight: 800,
                        fontSize: 15,
                        color: '#6c63ff',
                        paddingRight: 24,
                        borderRight: '1px solid #1e2240',
                        marginRight: 16,
                        whiteSpace: 'nowrap',
                        padding: '16px 24px 16px 0',
                    }}
                >
                    FSA Lab
                </div>
                {/* Tutorial */}
                {[{ id: 'tutorial', label: 'Tutorial', icon: <BookOpen size={15} /> }].map((n) => (
                    <button
                        key={n.id}
                        onClick={() => { setPage(n.id); setSoalTab('diagram') }}
                        style={{
                            background: 'none', border: 'none', padding: '16px 18px',
                            cursor: 'pointer', fontSize: 14,
                            fontWeight: page === n.id ? 700 : 400,
                            color: page === n.id ? '#6c63ff' : '#6b7299',
                            borderBottom: `2px solid ${page === n.id ? '#6c63ff' : 'transparent'}`,
                            whiteSpace: 'nowrap', fontFamily: 'sans-serif', transition: 'all 0.2s',
                        }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            {n.icon} {n.label}
                        </span>
                    </button>
                ))}
                {/* Tugas 2 */}
                <span style={{ fontSize: 10, color: '#3a4070', fontFamily: 'monospace', letterSpacing: 2, textTransform: 'uppercase', padding: '0 8px', whiteSpace: 'nowrap', borderLeft: '1px solid #1e2240', marginLeft: 4 }}>Tugas 2</span>
                {DFAS.filter((d) => d.tugas === 'Tugas 2').map((d) => (
                    <button
                        key={`soal-${d.id}`}
                        onClick={() => { setPage(`soal-${d.id}`); setSoalTab('diagram') }}
                        style={{
                            background: 'none', border: 'none', padding: '16px 18px',
                            cursor: 'pointer', fontSize: 14,
                            fontWeight: page === `soal-${d.id}` ? 700 : 400,
                            color: page === `soal-${d.id}` ? '#6c63ff' : '#6b7299',
                            borderBottom: `2px solid ${page === `soal-${d.id}` ? '#6c63ff' : 'transparent'}`,
                            whiteSpace: 'nowrap', fontFamily: 'sans-serif', transition: 'all 0.2s',
                        }}
                    >
                        {d.soal}
                    </button>
                ))}
                {/* Tugas 3 */}
                <span style={{ fontSize: 10, color: '#3a4070', fontFamily: 'monospace', letterSpacing: 2, textTransform: 'uppercase', padding: '0 8px', whiteSpace: 'nowrap', borderLeft: '1px solid #1e2240', marginLeft: 4 }}>Tugas 3</span>
                {DFAS.filter((d) => d.tugas === 'Tugas 3').map((d) => (
                    <button
                        key={`soal-${d.id}`}
                        onClick={() => { setPage(`soal-${d.id}`); setSoalTab('diagram') }}
                        style={{
                            background: 'none', border: 'none', padding: '16px 18px',
                            cursor: 'pointer', fontSize: 14,
                            fontWeight: page === `soal-${d.id}` ? 700 : 400,
                            color: page === `soal-${d.id}` ? '#6c63ff' : '#6b7299',
                            borderBottom: `2px solid ${page === `soal-${d.id}` ? '#6c63ff' : 'transparent'}`,
                            whiteSpace: 'nowrap', fontFamily: 'sans-serif', transition: 'all 0.2s',
                        }}
                    >
                        {d.soal}
                    </button>
                ))}
            </nav>

            <div
                style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    padding: '32px 20px 60px',
                }}
            >
                {page === 'tutorial' && (
                    <TutorialPage setPage={setPage} setSoalTab={setSoalTab} />
                )}
                {activeDFA && (
                    <SoalPage
                        activeDFA={activeDFA}
                        setPage={setPage}
                        setSoalTab={setSoalTab}
                    />
                )}
            </div>
        </div>
    )
}
