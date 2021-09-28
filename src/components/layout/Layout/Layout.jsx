import React from 'react';

const Layout = ({children}) => {
    return ( 
        <div className="layout">
            <header>header</header>
            <main className="main">
                {children}
            </main>
        </div>
     );
}
 
export default Layout;