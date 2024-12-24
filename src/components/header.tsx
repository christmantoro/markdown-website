import React from 'react';

import { Linkedin, Github } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/">Home</a></li>
                    <li style={styles.navItem}><a href="about">About</a></li>
                    <li style={styles.navItem}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div style={styles.socialIcons}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <Linkedin />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <Github />
                </a>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
    },
    nav: {
        display: 'flex',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        margin: '0 10px',
    },
    socialIcons: {
        display: 'flex',
    },
    icon: {
        color: 'white',
        marginLeft: '10px',
        fontSize: '1.5em',
    },
};

export default Header;