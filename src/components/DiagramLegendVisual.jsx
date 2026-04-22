export default function DiagramLegendVisual({ type }) {
    const svgProps = {
        width: 60,
        height: 36,
        style: { display: 'block', marginBottom: 8 },
    }
    if (type === 'circle')
        return (
            <svg {...svgProps}>
                <circle
                    cx={30}
                    cy={18}
                    r={14}
                    fill="#10152a"
                    stroke="#3a4070"
                    strokeWidth={2}
                />
                <text
                    x={30}
                    y={22}
                    textAnchor="middle"
                    fill="#e8eaf6"
                    fontSize={11}
                    fontFamily="monospace"
                >
                    q
                </text>
            </svg>
        )
    if (type === 'double-circle')
        return (
            <svg {...svgProps}>
                <circle
                    cx={30}
                    cy={18}
                    r={14}
                    fill="rgba(67,233,123,0.1)"
                    stroke="#43e97b"
                    strokeWidth={2}
                />
                <circle
                    cx={30}
                    cy={18}
                    r={9}
                    fill="none"
                    stroke="#43e97b"
                    strokeWidth={1.5}
                />
            </svg>
        )
    if (type === 'arrow-in')
        return (
            <svg {...svgProps}>
                <line
                    x1={5}
                    y1={18}
                    x2={42}
                    y2={18}
                    stroke="#f9ca24"
                    strokeWidth={2}
                />
                <polygon points="42,14 50,18 42,22" fill="#f9ca24" />
            </svg>
        )
    if (type === 'arrow')
        return (
            <svg {...svgProps}>
                <line
                    x1={5}
                    y1={18}
                    x2={45}
                    y2={18}
                    stroke="#5a6080"
                    strokeWidth={2}
                />
                <polygon points="45,14 53,18 45,22" fill="#5a6080" />
                <text
                    x={29}
                    y={14}
                    textAnchor="middle"
                    fill="#a9a3ff"
                    fontSize={10}
                    fontFamily="monospace"
                >
                    a
                </text>
            </svg>
        )
    if (type === 'self-loop')
        return (
            <svg {...svgProps}>
                <path
                    d="M18,18 C18,2 42,2 42,18"
                    fill="none"
                    stroke="#ff9f43"
                    strokeWidth={1.8}
                />
                <polygon points="42,14 42,22 36,18" fill="#ff9f43" />
                <text
                    x={30}
                    y={10}
                    textAnchor="middle"
                    fill="#a9a3ff"
                    fontSize={10}
                    fontFamily="monospace"
                >
                    a
                </text>
            </svg>
        )
    if (type === 'label')
        return (
            <svg {...svgProps}>
                <line
                    x1={5}
                    y1={22}
                    x2={50}
                    y2={22}
                    stroke="#5a6080"
                    strokeWidth={1.5}
                />
                <text
                    x={27}
                    y={16}
                    textAnchor="middle"
                    fill="#a9a3ff"
                    fontSize={12}
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    b
                </text>
            </svg>
        )
    return null
}
