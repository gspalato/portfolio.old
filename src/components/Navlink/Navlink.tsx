import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { NavLink, To } from 'react-router-dom';

import classes from '@lib/classes';

import Styles from './Navlink.module.css';

type Props = {
	className?: string;

	name: string;
	to: To;

	showTooltip?: boolean;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, name, showTooltip = true, to } = props;

	const [isHovered, setHovered] = React.useState(false);

	const isExternalLink = !to.toString().startsWith('/');

	const classnames = ({ isActive }: any) =>
		classes(
			'hover:bg-overlay-1 flex aspect-square items-center justify-center rounded-full p-[2px] transition-all duration-150',
			isActive && 'highlight-white bg-overlay-1',
			className,
		);

	return (
		<>
			<NavLink
				to={to}
				className={classnames}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{showTooltip && (
					<motion.div
						className='font-manrope text-text border-overlay-1 pointer-events-none absolute z-20 flex hidden gap-1 rounded-lg border bg-[#111] p-2 px-3 text-sm sm:block'
						animate={{
							opacity: isHovered ? 1 : 0,
							top: isHovered ? '-50px' : '-20px',
						}}
						transition={{ duration: 0.25 }}
					>
						{name}{' '}
						{isExternalLink && (
							<span>
								<GoArrowUpRight className='inline' />
							</span>
						)}
					</motion.div>
				)}
				{children}
			</NavLink>
		</>
	);
};

export default Component;
