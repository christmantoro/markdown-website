import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | 
                    <a href="/terms-of-service" style={linkStyle}>Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '1rem 0',
    textAlign: 'center',
    borderTop: '1px solid #e7e7e7',
};

const containerStyle: React.CSSProperties = {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 1rem',
};

const linkStyle: React.CSSProperties = {
    margin: '0 0.5rem',
    textDecoration: 'none',
    color: '#007bff',
};

export default Footer;