import React, { createContext, useContext, useState } from 'react';

type LayoutContextType = {
	navbarPosition: 'top' | 'bottom';
	getNavbarHeight: () => number;
	setNavbarPosition: (position: 'top' | 'bottom') => void;
};

export const LayoutContext = createContext<LayoutContextType>(
	{} as LayoutContextType,
);

export const useLayout = () => useContext(LayoutContext);

type LayoutProviderProps = {} & React.PropsWithChildren;

export const LayoutProvider: React.FC<LayoutProviderProps> = (props) => {
	const [navbarPosition, setNavbarPosition] = useState<'top' | 'bottom'>(
		'top',
	);

	const getNavbarHeight = () => {
		const nav = document.getElementById('nav');
		return nav ? nav.clientHeight : 0;
	};

	const value = {
		navbarPosition,
		getNavbarHeight,
		setNavbarPosition,
	};

	return (
		<LayoutContext.Provider value={value}>
			{props.children}
		</LayoutContext.Provider>
	);
};
