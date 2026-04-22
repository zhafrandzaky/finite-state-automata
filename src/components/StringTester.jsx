import { useState, useEffect, useCallback } from 'react'
import { Play, Loader2, RotateCcw, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'
import FSACanvas from './FSACanvas'
import { inputStyle, btnStyle } from '../styles'

export default function StringTester({ dfa }) {
    const [input, setInput] = useState('')
    const [traceSteps, setTraceSteps] = useState([])
    const [result, setResult] = useState(null)
    const [activeState, setActiveState] = useState(null)
    const [traceEdge, setTraceEdge] = useState(null)
    const [animIdx, setAnimIdx] = useState(-1)
    const [running, setRunning] = useState(false)

    const compute = useCallback(() => {
        if (!input && input !== '') return
        for (const ch of input) {
            if (!dfa.alphabet.includes(ch)) {
                setResult({
                    accepted: null,
                    reason: `Karakter '${ch}' tidak ada di alfabet {${dfa.alphabet.join(',')}}`,
                })
                setTraceSteps([])
                return
            }
        }
        const steps = [{ state: dfa.start, input: null, note: 'State awal' }]
        let cur = dfa.start
        for (const ch of input) {
            const next = dfa.delta[cur][ch]
            steps.push({
                state: next,
                from: cur,
                input: ch,
                note: `δ(${dfa.states[cur]},${ch})=${dfa.states[next]}`,
            })
            cur = next
        }
        const accepted = dfa.finals.includes(cur)
        setTraceSteps(steps)
        setResult({
            accepted,
            reason: `Berakhir di ${dfa.states[cur]} ${accepted ? '(final state ✓)' : '(bukan final state ✗)'}`,
        })
        setActiveState(null)
        setTraceEdge(null)
        setAnimIdx(-1)
        setRunning(true)
    }, [input, dfa])

    useEffect(() => {
        if (!running || traceSteps.length === 0) return
        let idx = 0
        setActiveState(traceSteps[0].state)
        const iv = setInterval(() => {
            idx++
            if (idx >= traceSteps.length) {
                clearInterval(iv)
                setRunning(false)
                setTraceEdge(null)
                return
            }
            const s = traceSteps[idx]
            setActiveState(s.state)
            setTraceEdge({ from: s.from, sym: s.input })
            setAnimIdx(idx)
        }, 700)
        return () => clearInterval(iv)
    }, [running, traceSteps])

    return (
        <div>
            <FSACanvas
                dfa={dfa}
                activeState={activeState}
                traceEdge={traceEdge}
            />
            <div style={{ marginTop: 16 }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                            setTraceSteps([])
                            setResult(null)
                            setActiveState(null)
                        }}
                        onKeyDown={(e) => e.key === 'Enter' && compute()}
                        placeholder={`Contoh: ${dfa.alphabet[0]}${dfa.alphabet[1]}${dfa.alphabet[0]}`}
                        style={inputStyle}
                    />
                    <button
                        onClick={compute}
                        disabled={running}
                        style={btnStyle(running)}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            {running ? <Loader2 size={14} className="spin" /> : <Play size={14} />}
                            {running ? 'Memproses' : 'Uji'}
                        </span>
                    </button>
                    <button
                        onClick={() => {
                            setInput('')
                            setTraceSteps([])
                            setResult(null)
                            setActiveState(null)
                            setTraceEdge(null)
                        }}
                        style={{
                            ...btnStyle(false),
                            background: '#1e2240',
                            color: '#6b7299',
                        }}
                    >
                        <RotateCcw size={14} />
                    </button>
                </div>

                {traceSteps.length > 0 && (
                    <div style={{ marginBottom: 14 }}>
                        <div
                            style={{
                                fontSize: 11,
                                color: '#6b7299',
                                fontFamily: 'monospace',
                                marginBottom: 8,
                                letterSpacing: 1,
                            }}
                        >
                            JEJAK EKSEKUSI:
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 6,
                            }}
                        >
                            {traceSteps.map((s, i) => (
                                <div
                                    key={i}
                                    style={{
                                        padding: '5px 12px',
                                        borderRadius: 8,
                                        fontSize: 12,
                                        fontFamily: 'monospace',
                                        background:
                                            animIdx >= i
                                                ? 'rgba(108,99,255,0.2)'
                                                : 'rgba(255,255,255,0.04)',
                                        border: `1px solid ${animIdx >= i ? 'rgba(108,99,255,0.5)' : '#1e2240'}`,
                                        color:
                                            animIdx >= i
                                                ? '#c8c3ff'
                                                : '#4a5070',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    {s.note}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {result && (
                    <div
                        style={{
                            padding: '12px 18px',
                            borderRadius: 10,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: 14,
                            fontWeight: 700,
                            background:
                                result.accepted === null
                                    ? 'rgba(249,202,36,0.1)'
                                    : result.accepted
                                      ? 'rgba(67,233,123,0.1)'
                                      : 'rgba(255,101,132,0.1)',
                            border: `1px solid ${result.accepted === null ? 'rgba(249,202,36,0.4)' : result.accepted ? 'rgba(67,233,123,0.4)' : 'rgba(255,101,132,0.4)'}`,
                            color:
                                result.accepted === null
                                    ? '#f9ca24'
                                    : result.accepted
                                      ? '#43e97b'
                                      : '#ff6584',
                        }}
                    >
                        {result.accepted === null
                            ? <AlertTriangle size={16} />
                            : result.accepted
                              ? <CheckCircle2 size={16} />
                              : <XCircle size={16} />}
                        {' '}
                        {result.accepted === null
                            ? result.reason
                            : `${result.accepted ? 'DITERIMA' : 'DITOLAK'} — ${result.reason}`}
                    </div>
                )}
            </div>
        </div>
    )
}
