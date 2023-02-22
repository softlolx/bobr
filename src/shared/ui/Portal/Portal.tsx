import { FC } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.types';

export const Portal: FC<PortalProps> = (props) => {
  const appElement = document.body;
  const { children, element = appElement } = props;

  return createPortal(children, element);
};
