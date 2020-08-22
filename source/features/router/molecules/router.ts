import {
  FC,
  PropsWithChildren,
  createContext,
  createElement,
  useState,
  useCallback,
} from 'react';

type RouterContextProps = {
  pathname: string;
  pushState: (url: string) => void;
};

export const RouterContext = createContext<RouterContextProps>({
  pathname: window.location.pathname,
  pushState: () => {},
});

export const Router: FC<PropsWithChildren<{ base: string }>> = ({ base, children }) => {
  const [routerState, setRouterState] = useState(window.location.toString());

  const pushState = useCallback((newUrl) => {
    window.history.pushState(null, '', newUrl);
    setRouterState(newUrl.replace(base, ''));
  }, []);

  return createElement(
    RouterContext.Provider,
    {
      value: {
        pathname: new URL(routerState, window.location.origin).pathname,
        pushState,
      },
    },
    children,
  );
};
