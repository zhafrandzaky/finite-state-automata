import { Bot, Settings2, CircleDot, Table2, Scale, PlayCircle, TrafficCone, CreditCard, Lock, Smartphone, LayoutList, Binary, Lightbulb, Shapes, Map, PenLine, CheckCircle2, BookOpen } from 'lucide-react'
import DiagramLegendVisual from './DiagramLegendVisual'
import { thStyle, tdStyle } from '../styles'

const ICON_MAP = {
    bot: Bot,
    settings: Settings2,
    'circle-dot': CircleDot,
    table: Table2,
    scale: Scale,
    play: PlayCircle,
    'traffic-cone': TrafficCone,
    'credit-card': CreditCard,
    lock: Lock,
    smartphone: Smartphone,
    'layout-list': LayoutList,
    binary: Binary,
    lightbulb: Lightbulb,
    shapes: Shapes,
    map: Map,
    'pen-line': PenLine,
    'check-circle-2': CheckCircle2,
    'book-open': BookOpen,
}

function Icon({ name, size = 28 }) {
    const C = ICON_MAP[name]
    return C ? <C size={size} /> : null
}

export default function TheorySection({ section }) {
    return (
        <div style={{ marginBottom: 32 }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                }}
            >
                <span style={{ fontSize: 28, color: '#9d97ff' }}><Icon name={section.icon} size={28} /></span>
                <div>
                    {section.pertemuan && (
                        <div style={{ fontSize: 10, color: section.pertemuan === 6 ? '#43e97b' : '#6c63ff', fontFamily: 'monospace', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 2 }}>
                            Pertemuan {section.pertemuan}
                        </div>
                    )}
                    <h2
                        style={{
                            fontSize: 22,
                            fontWeight: 800,
                            color: '#e8eaf6',
                            margin: 0,
                        }}
                    >
                        {section.title}
                    </h2>
                </div>
            </div>
            {section.content.map((block, bi) => {
                if (block.type === 'text')
                    return (
                        <p
                            key={bi}
                            style={{
                                color: '#b0b4d0',
                                lineHeight: 1.8,
                                marginBottom: 16,
                                fontSize: 15,
                            }}
                        >
                            {block.body}
                        </p>
                    )
                if (block.type === 'highlight')
                    return (
                        <div
                            key={bi}
                            style={{
                                background: 'rgba(108,99,255,0.1)',
                                border: '1px solid rgba(108,99,255,0.3)',
                                borderLeft: '4px solid #6c63ff',
                                borderRadius: 10,
                                padding: '14px 18px',
                                marginBottom: 16,
                            }}
                        >
                            <p
                                style={{
                                    color: '#c8c3ff',
                                    lineHeight: 1.8,
                                    margin: 0,
                                    fontSize: 15,
                                }}
                            >
                                {block.body}
                            </p>
                        </div>
                    )
                if (block.type === 'analogy')
                    return (
                        <div key={bi} style={{ marginBottom: 20 }}>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: '#6b7299',
                                    fontFamily: 'monospace',
                                    letterSpacing: 1,
                                    marginBottom: 12,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {block.title}
                            </div>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(auto-fit,minmax(200px,1fr))',
                                    gap: 10,
                                }}
                            >
                                {block.items.map((item, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: '#10152a',
                                            border: '1px solid #1e2240',
                                            borderRadius: 10,
                                            padding: '12px 14px',
                                            display: 'flex',
                                            gap: 10,
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <span style={{ fontSize: 22, color: '#9d97ff' }}>
                                            <Icon name={item.icon} size={20} />
                                        </span>
                                        <span
                                            style={{
                                                color: '#b0b4d0',
                                                fontSize: 13,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                if (block.type === 'components')
                    return (
                        <div
                            key={bi}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                marginBottom: 16,
                            }}
                        >
                            {block.items.map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: '#10152a',
                                        border: `1px solid ${item.color}30`,
                                        borderLeft: `4px solid ${item.color}`,
                                        borderRadius: 10,
                                        padding: '14px 18px',
                                        display: 'flex',
                                        gap: 16,
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 26,
                                            fontWeight: 900,
                                            fontFamily: 'monospace',
                                            color: item.color,
                                            minWidth: 36,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.symbol}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontWeight: 700,
                                                fontSize: 15,
                                                color: '#e8eaf6',
                                                marginBottom: 4,
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                        <div
                                            style={{
                                                color: '#8a8fb0',
                                                fontSize: 13,
                                                lineHeight: 1.6,
                                                marginBottom: 6,
                                            }}
                                        >
                                            {item.desc}
                                        </div>
                                        <code
                                            style={{
                                                background:
                                                    'rgba(255,255,255,0.05)',
                                                padding: '3px 10px',
                                                borderRadius: 6,
                                                fontSize: 13,
                                                color: item.color,
                                                fontFamily: 'monospace',
                                            }}
                                        >
                                            {item.example}
                                        </code>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                if (block.type === 'diagram-legend')
                    return (
                        <div
                            key={bi}
                            style={{
                                display: 'grid',
                                gridTemplateColumns:
                                    'repeat(auto-fit,minmax(220px,1fr))',
                                gap: 10,
                                marginBottom: 16,
                            }}
                        >
                            {block.items.map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: '#10152a',
                                        border: '1px solid #1e2240',
                                        borderRadius: 10,
                                        padding: '12px 16px',
                                    }}
                                >
                                    <DiagramLegendVisual type={item.visual} />
                                    <div
                                        style={{
                                            fontWeight: 700,
                                            color: '#e8eaf6',
                                            fontSize: 13,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                    <div
                                        style={{
                                            color: '#6b7299',
                                            fontSize: 12,
                                        }}
                                    >
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                if (block.type === 'comparison')
                    return (
                        <div
                            key={bi}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 14,
                                marginBottom: 16,
                            }}
                        >
                            {[block.left, block.right].map((side, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: '#10152a',
                                        border: `1px solid ${side.color}30`,
                                        borderRadius: 12,
                                        padding: '18px 20px',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: 800,
                                            fontSize: 18,
                                            color: side.color,
                                            marginBottom: 14,
                                        }}
                                    >
                                        {side.title}
                                    </div>
                                    {side.points.map((p, j) => (
                                        <div
                                            key={j}
                                            style={{
                                                display: 'flex',
                                                gap: 10,
                                                marginBottom: 10,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: side.color,
                                                    fontSize: 16,
                                                    marginTop: 1,
                                                }}
                                            >
                                                •
                                            </span>
                                            <span
                                                style={{
                                                    color: '#8a8fb0',
                                                    fontSize: 13,
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {p}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )
                if (block.type === 'table-example')
                    return (
                        <div key={bi} style={{ marginBottom: 16 }}>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: '#6b7299',
                                    marginBottom: 10,
                                }}
                            >
                                {block.title}
                            </div>
                            <div
                                style={{ overflowX: 'auto', marginBottom: 12 }}
                            >
                                <table
                                    style={{
                                        borderCollapse: 'collapse',
                                        fontFamily: 'monospace',
                                        fontSize: 13,
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            {block.headers.map((h) => (
                                                <th key={h} style={thStyle}>
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {block.rows.map((row, i) => (
                                            <tr key={i}>
                                                {row
                                                    .slice(0, 3)
                                                    .map((cell, j) => (
                                                        <td
                                                            key={j}
                                                            style={{
                                                                ...tdStyle,
                                                                color:
                                                                    row[3] ===
                                                                        'start+final' &&
                                                                    j === 0
                                                                        ? '#43c6ff'
                                                                        : '#e8eaf6',
                                                            }}
                                                        >
                                                            {cell}
                                                        </td>
                                                    ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 16,
                                    flexWrap: 'wrap',
                                }}
                            >
                                {block.legend.map((l, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            fontSize: 12,
                                            color: '#a9a3ff',
                                            fontFamily: 'monospace',
                                        }}
                                    >
                                        <b>{l.symbol}</b> = {l.desc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )
                if (block.type === 'steps')
                    return (
                        <div
                            key={bi}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                                marginBottom: 16,
                            }}
                        >
                            {block.items.map((s, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'flex',
                                        gap: 14,
                                        alignItems: 'flex-start',
                                        background: '#10152a',
                                        border: '1px solid #1e2240',
                                        borderRadius: 10,
                                        padding: '12px 16px',
                                    }}
                                >
                                    <div
                                        style={{
                                            background: '#6c63ff',
                                            color: '#fff',
                                            fontWeight: 800,
                                            fontSize: 13,
                                            width: 28,
                                            height: 28,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {s.step}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontWeight: 700,
                                                color: '#e8eaf6',
                                                fontSize: 14,
                                                marginBottom: 3,
                                            }}
                                        >
                                            {s.title}
                                        </div>
                                        <div
                                            style={{
                                                color: '#8a8fb0',
                                                fontSize: 13,
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {s.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                if (block.type === 'example-trace')
                    return (
                        <div
                            key={bi}
                            style={{
                                background: '#10152a',
                                border: '1px solid #1e2240',
                                borderRadius: 12,
                                padding: '18px 20px',
                                marginBottom: 16,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 13,
                                    color: '#6b7299',
                                    marginBottom: 14,
                                }}
                            >
                                {block.title}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 8,
                                    marginBottom: 14,
                                    alignItems: 'center',
                                }}
                            >
                                {block.steps.map((s, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                        }}
                                    >
                                        <div
                                            style={{
                                                background:
                                                    'rgba(108,99,255,0.15)',
                                                border: '1px solid rgba(108,99,255,0.3)',
                                                borderRadius: 8,
                                                padding: '6px 12px',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: '#a9a3ff',
                                                    fontFamily: 'monospace',
                                                }}
                                            >
                                                {s.to}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: 10,
                                                    color: '#5a6090',
                                                }}
                                            >
                                                {s.note}
                                            </div>
                                        </div>
                                        {i < block.steps.length - 1 && (
                                            <span
                                                style={{
                                                    color: '#3a4070',
                                                    fontSize: 18,
                                                }}
                                            >
                                                →
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '8px 16px',
                                    borderRadius: 8,
                                    background: 'rgba(255,101,132,0.1)',
                                    border: '1px solid rgba(255,101,132,0.3)',
                                    color: '#ff6584',
                                    fontSize: 14,
                                    fontWeight: 700,
                                }}
                            >
                                ✗ {block.result} — {block.reason}
                            </div>
                        </div>
                    )
                return null
            })}
        </div>
    )
}
