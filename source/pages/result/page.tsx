import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  createElement,
  ReactNode,
} from 'react';
import { PageTemplate } from '../../ui';
import { Field } from '../../ui/molecules/field';
import { Group } from '../../ui/molecules/group';
import { Link } from '../../features/router/molecules/link';

function createFields(items: Item[]): ReactNode {
  return createElement(
    'div',
    { className: 'form-content' },
    items.map((props) => {
      if (props.type === 'group') {
        // eslint-disable-next-line react/destructuring-assignment
        return createElement(Group, props, createFields(props.items));
      }

      return createElement(Field, props);
    }),
  );
}

function makeForm(config: Config) {
  const { header, items = [], actions = [] } = config;

  return createElement('form', { className: 'form' }, [
    createElement('h1', { className: 'form-header' }, header),
    createFields(items),
    createElement(
      'div',
      { className: 'form-footer' },
      actions.map(({ label }) => createElement('button', null, label)),
    ),
  ]);
}

export const ResultPage: FC = () => {
  const [config, setConfig] = useState<Config>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('config')) {
      const json = atob(params.get('config') as string);

      try {
        setConfig(JSON.parse(json || '""'));
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  const form = useMemo(() => makeForm(config), [config]);

  return (
    <PageTemplate>
      <nav className="tabs">
        <Link to="/config">Config</Link>
        <Link to="/result">Result</Link>
      </nav>
      <div className="tab-content">{form}</div>
    </PageTemplate>
  );
};
