import React, { FC, PropsWithChildren } from 'react';

export const PageTemplate: FC<PropsWithChildren<{}>> = ({ children }) => (
  <main className="page">{children}</main>
);
