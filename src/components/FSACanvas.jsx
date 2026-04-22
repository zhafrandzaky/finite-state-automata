import { useEffect, useRef } from 'react'
import { drawFSACanvas } from '../utils/canvasDrawing'

export default function FSACanvas({ dfa, activeState, traceEdge, height = 320 }) {
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) drawFSACanvas(ref.current, dfa, activeState, traceEdge)
    }, [dfa, activeState, traceEdge])
    return (
        <canvas
            ref={ref}
            width={480}
            height={height}
            style={{
                width: '100%',
                borderRadius: 12,
                background: '#080c1a',
                border: '1px solid #1e2240',
                display: 'block',
            }}
        />
    )
}
