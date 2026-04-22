export const thStyle = {
    background: 'rgba(108,99,255,0.12)',
    color: '#9d97ff',
    padding: '10px 16px',
    border: '1px solid #1e2240',
    fontSize: 13,
}

export const tdStyle = {
    border: '1px solid #1e2240',
    padding: '9px 16px',
    textAlign: 'center',
}

export const inputStyle = {
    flex: 1,
    minWidth: 120,
    background: '#08091a',
    border: '1px solid #1e2240',
    borderRadius: 10,
    color: '#e8eaf6',
    fontFamily: 'monospace',
    fontSize: 15,
    padding: '10px 14px',
    outline: 'none',
}

export const btnStyle = (disabled) => ({
    background: disabled ? '#2a2f50' : '#6c63ff',
    color: disabled ? '#4a5070' : '#fff',
    border: 'none',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 14,
    padding: '10px 22px',
    cursor: disabled ? 'not-allowed' : 'pointer',
})
