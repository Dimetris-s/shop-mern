import React from 'react';

const Layout = ({children}) => {
    return ( 
        <>
            <header>header</header>
            <main className="main">
                {children}
            </main>
        </>
     );
}
 
export default Layout;