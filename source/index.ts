import { createElement } from 'react';
import { render } from 'react-dom';

import { ConfigPage } from './pages/config';
import { ResultPage } from './pages/result';
import { Router, Route } from './features/router';

render(
  createElement(Router, null, [
    createElement(Route, { to: '/config', component: ConfigPage }),
    createElement(Route, { to: '/result', component: ResultPage }),
  ]),
  document.getElementById('entry'),
);
