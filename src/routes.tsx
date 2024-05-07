import { AiOutlineHome } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RxBackpack } from 'react-icons/rx';
import { createBrowserRouter } from 'react-router-dom';

import About from '@app/About/About';
import Blog from '@app/Blog/Blog';
import Home from '@app/Home/Home';

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
				className='text-text pb-px'
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
	{
		path: '/blog',
		name: 'Blog',
		element: <Blog />,
		icon: (
			<FiEdit
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text pb-px'
			/>
		),
	},
];

export const router = createBrowserRouter(routes);
