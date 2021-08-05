import React from 'react';
import Header from '../components/header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="background-wrapper">
                    <div id="background_image"></div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;