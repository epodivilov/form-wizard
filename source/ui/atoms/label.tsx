import React, { FC, PropsWithChildren } from 'react';

type LabelProps = PropsWithChildren<{
  htmlFor: string;
}>;

export const Label: FC<LabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor}>{children}</label>
);
