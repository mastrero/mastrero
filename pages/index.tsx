import * as React from 'react';
import Header from '../components/header';

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <main style={{ height: '200vh' }}>{/* <About /> */}</main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Home;
