import React from 'react';
import { NavLink, To } from 'react-router-dom';

import classes from '@lib/classes';

type Props = {
	className?: string;

	to: To;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, to } = props;

	const classnames = ({ isActive }: any) =>
		classes(
			'hover:bg-overlay-1 flex aspect-square items-center justify-center rounded-full p-[2px] transition-colors duration-150',
			isActive && '',
			className,
		);

	return (
		<NavLink to={to} className={classnames}>
			{children}
		</NavLink>
	);
};

export default Component;
