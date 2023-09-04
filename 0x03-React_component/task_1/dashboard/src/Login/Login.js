import React from 'react';

export default function Login() {
    return (
        <div className="App-body">
            <p>
                Login to access the full dashboard
            </p>
            <form style={{display: 'flex', gap: '1rem'}}>
                <div>
                    <label htmlFor="email" style={{marginRight: '5px'}}>
                        Email
                    </label>
                    <input type="email" name="email" style={{border: '1px solid #D3D3D3', borderRadius: '3px'}}/>
                </div>
                <div>
                    <label htmlFor="password" style={{marginRight: '5px'}}>
                        Password
                    </label>
                    <input type="password" name="password" style={{border: '1px solid #D3D3D3', borderRadius: '3px'}}/>
                </div>
                <button type="submit" style={{border: '1px solid #D3D3D3', borderRadius: '3px', background: 'transparent'}}>OK</button>
            </form>
        </div>
    )
}

const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px'
    },
    AppBodyInput: {
        padding: '0 16px 0 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px'
    },
    AppBodyLabel: {
        marginRight: '5px'
    },
    AppBodyForm: {
        display: 'flex',
        gap: '1rem'
    },
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent'
    }
})
