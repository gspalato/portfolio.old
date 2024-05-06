import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@app/App.tsx';

import { LayoutProvider } from '@lib/layout.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<LayoutProvider>
				<App />
			</LayoutProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
