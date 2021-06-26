import * as React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';

const usePortal: React.FC<JSX.Element | null> = (component: any) => {
  const [show, setShow] = React.useState(false);

  React.useLayoutEffect(() => {
    if (document.readyState) setShow(true);
    return () => setShow(false);
  });

  return show ? ReactDOM.createPortal(<Box as="mastrero-portal">{component}</Box>, document.body) : null;
};

export default usePortal;
