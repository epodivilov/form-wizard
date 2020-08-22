import React, { FC } from 'react';
import { Label } from '../atoms/label';
import { Input } from '../atoms/input';

type FieldProps = {
  id: string;
  label: string;
  type: FieldType;
};
export const Field: FC<FieldProps> = ({ id, type, label }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} />
  </>
);
