import { AiOutlineHome } from 'react-icons/ai';
import { RxBackpack } from 'react-icons/rx';
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
			<AiOutlineHome
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
			<RxBackpack
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text'
			/>
		),
	},
];

export const router = createBrowserRouter(routes);
