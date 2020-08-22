import React, { FC } from 'react';

type InputProps = Field;

export const Input: FC<InputProps> = ({
  id, type, name, value,
}) => {
  if (type === 'textarea') {
    return <textarea id={id} name={name} value={value} />;
  }

  return <input id={id} type={type} name={name} value={value} />;
};
