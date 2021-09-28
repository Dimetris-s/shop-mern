import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Layout from './components/layout/Layout/Layout';

const App = () => {
  return ( 
    <Layout>
      <AppRouter/>
    </Layout>
   );
}
 
export default App;