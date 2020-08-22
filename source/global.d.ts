type FieldType = 'number' | 'text' | 'textarea' | 'checkbox' | 'date' | 'radio';

type Field = {
  id: string;
  type: FieldType;
  label: string;
  name?: string;
  value?: string;
};

type Group = {
  id: string;
  type: 'group';
  label: string;
  items: (Field | Group)[];
};

type Action = {
  label: 'Ok' | 'Cancel' | 'Apply';
};

type Item = Field | Group;

type Config = {
  header?: string;
  items?: Item[];
  actions?: Action[];
};
