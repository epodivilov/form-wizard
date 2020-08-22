import React, {
  useCallback,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { RouterContext } from './router';

type LinkProps = PropsWithChildren<{
  to: string;
}>;
export const Link: FC<LinkProps> = ({ to, children }) => {
  const { base, pathname, pushState } = useContext(RouterContext);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    pushState(base + to + window.location.search);
  }, []);

  const className = useMemo(() => `tab${pathname === to ? ' active' : ''}`, [
    pathname,
  ]);

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
