import React from 'react';
import holbertonLogo from '../assets/holberton_logo.jpg';
import './header.css';

export default function Header() {
    return (
        <header className="App-header">
            <img src={holbertonLogo} alt="holberton-logo"></img>
            <h1>School dashboard</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        borderBottom: '3px solid #e1484c'
    },
    AppHeaderImg: {
        width: 150
    },
    AppHeaderH1: {
        color: '#e1484c'
    }
})
