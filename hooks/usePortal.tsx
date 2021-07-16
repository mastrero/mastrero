import * as React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';

const usePortal: React.FC<JSX.Element | null> = (component: React.ReactElement) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (document.readyState) setShow(true);
    return () => setShow(false);
  });

  return show ? ReactDOM.createPortal(<Box as="mastrero-portal">{component}</Box>, document.body) : null;
};

export default usePortal;
