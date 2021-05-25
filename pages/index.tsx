import * as React from 'react';
import Header from '../components/header';
// import { About } from '../components/sections';

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <main>{/* <About /> */}</main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Home;
