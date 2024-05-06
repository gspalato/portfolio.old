import { BackpackIcon, HomeIcon } from '@radix-ui/react-icons';
import { createBrowserRouter } from 'react-router-dom';

import About from '@/app/About/About';
import Home from '@/app/Home/Home';

import { NAVBAR_ICON_SIZE } from '@constants/icons';

export const routes = [
	{
		path: '/',
		name: 'Home',
		element: <Home />,
		icon: (
			<HomeIcon
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text'
			/>
		),
	},
	{
		path: '/about',
		name: 'About',
		element: <About />,
		icon: (
			<BackpackIcon
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text'
			/>
		),
	},
];

export const router = createBrowserRouter(routes);
