import React from 'react';
import { useSelector } from 'react-redux';
import AppRouter from './components/AppRouter/AppRouter';
import Layout from './components/layout/Layout/Layout';

const App = () => {
  const store = useSelector(store => store)
  console.log(store);
  return ( 
    <Layout>
      <AppRouter/>
    </Layout>
   );
}
 
export default App;