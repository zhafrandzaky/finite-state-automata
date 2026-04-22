import { thStyle, tdStyle } from '../styles'

export default function TransitionTable({ dfa, activeState }) {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontFamily: 'monospace',
                    fontSize: 14,
                }}
            >
                <thead>
                    <tr>
                        <th style={thStyle}>δ</th>
                        {dfa.alphabet.map((a) => (
                            <th key={a} style={thStyle}>
                                {a}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dfa.states.map((s, i) => {
                        const isS = i === dfa.start,
                            isF = dfa.finals.includes(i),
                            isA = activeState === i
                        const rowLabel = `${isS ? '→' : ''}${isF ? '*' : ''}${s}`
                        const color = isA
                            ? '#f9ca24'
                            : isS && isF
                              ? '#43c6ff'
                              : isF
                                ? '#43e97b'
                                : isS
                                  ? '#f9ca24'
                                  : '#e8eaf6'
                        return (
                            <tr
                                key={i}
                                style={{
                                    background: isA
                                        ? 'rgba(249,202,36,0.06)'
                                        : i % 2
                                          ? 'rgba(255,255,255,0.015)'
                                          : 'transparent',
                                }}
                            >
                                <td
                                    style={{
                                        ...tdStyle,
                                        color,
                                        fontWeight: 700,
                                    }}
                                >
                                    {rowLabel}
                                </td>
                                {dfa.alphabet.map((sym) => (
                                    <td
                                        key={sym}
                                        style={{
                                            ...tdStyle,
                                            color: dfa.finals.includes(
                                                dfa.delta[i][sym],
                                            )
                                                ? '#43e97b'
                                                : '#c8cbea',
                                        }}
                                    >
                                        {dfa.states[dfa.delta[i][sym]]}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div
                style={{
                    marginTop: 10,
                    display: 'flex',
                    gap: 14,
                    flexWrap: 'wrap',
                }}
            >
                {[
                    ['→ = state awal', '#f9ca24'],
                    ['* = final state', '#43e97b'],
                    ['→* = keduanya', '#43c6ff'],
                ].map(([t, c]) => (
                    <span
                        key={t}
                        style={{
                            fontSize: 11,
                            color: c,
                            fontFamily: 'monospace',
                        }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}
