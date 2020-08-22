import React, { FC, PropsWithChildren } from 'react';
import { Label } from '../atoms/label';

type GroupProps = PropsWithChildren<{
  id: string;
  label: string;
}>;
export const Group: FC<GroupProps> = ({ id, label, children }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    {children}
  </>
);
