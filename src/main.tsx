import * as React from 'react';
import { render } from 'react-dom';

import { HelloWorld } from "./containers/hello-world.container";
import './styles/index.less';

const renderApp = () => {
    render(
        <HelloWorld/>,
        document.getElementById('app')
    );
};

renderApp();
if ((module as any).hot) {
    (module as any).hot.accept()
}
