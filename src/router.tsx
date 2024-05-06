import { createBrowserRouter } from 'react-router-dom';

import About from '@/app/About/About';
import Home from '@/app/Home/Home';

export const routes = [
	{
		path: '/',
		name: 'Home',
		element: <Home />,
	},
	{
		path: '/about',
		name: 'About',
		element: <About />,
	},
];

export const router = createBrowserRouter(routes);
