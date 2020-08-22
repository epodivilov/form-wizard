import { createElement, useContext, FC } from 'react';
import { RouterContext } from './router';

type RouteProps = {
  to: string;
  component: FC;
};
export const Route: FC<RouteProps> = ({ to, component }) => {
  const { pathname } = useContext(RouterContext);

  if (pathname === to) {
    return createElement(component);
  }

  return null;
};
