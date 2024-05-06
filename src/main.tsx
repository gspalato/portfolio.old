import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconContext } from 'react-icons/lib';
import { BrowserRouter } from 'react-router-dom';

import App from '@app/App.tsx';

import { LayoutProvider } from '@lib/layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<IconContext.Provider
				value={{ style: { verticalAlign: 'middle' } }}
			>
				<LayoutProvider>
					<App />
				</LayoutProvider>
			</IconContext.Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
