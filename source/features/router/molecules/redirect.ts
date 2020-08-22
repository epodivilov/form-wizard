import { useContext, FC } from 'react';
import { RouterContext } from './router';

type RedirectProps = {
  to: string;
  from: string;
};
export const Redirect: FC<RedirectProps> = ({ to, from }) => {
  const { base, pathname, pushState } = useContext(RouterContext);

  if (pathname === from) {
    pushState(base + to);
  }

  return null;
};
