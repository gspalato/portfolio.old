import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import CommandPalette from '@/components/CommandPalette';
import Nav from '@/components/Nav/Nav';

import '@styles/styles.css';

import { routes } from '@/routes';

const App = () => {
	const location = useLocation();

	return (
		<>
			<div className='background-noise' />
			<CommandPalette />
			<Nav position='bottom' />
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					{routes.map((route) => (
						<Route
							path={route.path}
							element={route.element}
							key={route.path}
						/>
					))}
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default App;
