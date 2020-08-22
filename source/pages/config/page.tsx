import React, {
  FC,
  useCallback,
  useRef,
  useContext,
  useState,
  useEffect,
} from 'react';
import { PageTemplate } from '../../ui';
import { Link } from '../../features/router/molecules/link';
import { RouterContext } from '../../features/router';

function prettify(string: string) {
  return JSON.stringify(JSON.parse(string), null, 2);
}

export const ConfigPage: FC = () => {
  const { base, pathname, pushState } = useContext(RouterContext);

  const [config, setConfig] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('config')) {
      const json = atob(params.get('config') as string);

      try {
        setConfig(prettify(json || '""'));
      } catch (error) {
        alert(error);
      }
    }
  }, [config]);

  const textInput = useRef<HTMLTextAreaElement | null>(null);
  const handleClick = useCallback((e) => {
    e.preventDefault();

    if (textInput.current != null) {
      const params = new URLSearchParams('');
      params.set('config', btoa(textInput.current.value));

      try {
        textInput.current.value = prettify(textInput.current.value || '""');
        pushState(`${base + pathname}?${params}`);
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  return (
    <PageTemplate>
      <nav className="tabs">
        <Link to="/config">Config</Link>
        <Link to="/result">Result</Link>
      </nav>
      <div className="tab-content">
        <form className="config-form" onSubmit={handleClick}>
          <textarea
            ref={textInput}
            className="config-editor"
            defaultValue={config}
          />
          <button className="apply-button" type="submit" onClick={handleClick}>
            Apply
          </button>
        </form>
      </div>
    </PageTemplate>
  );
};
