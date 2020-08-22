import React, { FC } from 'react';

type InputProps = Omit<Field, 'label'>;

export const Input: FC<InputProps> = ({
  id, type, name, value,
}) => {
  if (type === 'textarea') {
    return <textarea id={id} name={name} defaultValue={value} />;
  }

  if (type === 'checkbox' || type === 'radio') {
    return <input id={id} type={type} name={name} defaultChecked={Boolean(value)} />;
  }

  return <input id={id} type={type} name={name} defaultValue={value} />;
};
