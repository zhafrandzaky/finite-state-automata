export default function ExampleChip({ str }) {
    return (
        <span
            style={{
                background: 'rgba(108,99,255,0.1)',
                border: '1px solid rgba(108,99,255,0.25)',
                borderRadius: 8,
                padding: '4px 12px',
                fontSize: 13,
                color: '#a9a3ff',
                fontFamily: 'monospace',
                cursor: 'default',
            }}
        >
            "{str}"
        </span>
    )
}
