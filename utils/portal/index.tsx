import * as React from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<PortalProps> = ({ children, type = 'portal' }) => {
  let mountNode = React.useRef<HTMLDivElement | null>(null);
  let portalNode = React.useRef<HTMLElement | null>(null);
  const [, dispatch] = React.useState<{}>(Object.create(null));

  let forceUpdate = React.useCallback((): void => {
    dispatch(Object.create(null));
  }, [dispatch]);

  React.useLayoutEffect(() => {
    if (!mountNode.current) return;

    const ownerDocument = mountNode.current!.ownerDocument;
    portalNode.current = ownerDocument?.createElement(type)!;
    ownerDocument!.body.appendChild(portalNode.current);
    forceUpdate();

    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate]);

  if (portalNode.current) return createPortal(children, portalNode.current);
  return <span ref={mountNode} />;
};

type PortalProps = {
  children: React.ReactNode;
  type?: string;
};

export default Portal;
