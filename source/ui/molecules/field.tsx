import React, { FC } from 'react';
import { Label } from '../atoms/label';
import { Input } from '../atoms/input';

type FieldProps = Field;
export const Field: FC<FieldProps> = ({
  id, type, label, name, value,
}) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} name={name} value={value} />
  </>
);
