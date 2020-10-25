import React, { useRef } from 'react';
import { Main } from './_style';
import Sidebar from './_sidebar';

const MainLayout = ({ children }) => {
  const mainRef = useRef(null);

  return (
    <>
      <Sidebar mainRef={mainRef} />
      <Main ref={mainRef}>{children}</Main>
    </>
  );
};

export default MainLayout;
