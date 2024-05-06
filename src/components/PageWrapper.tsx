import { motion } from 'framer-motion';
import React from 'react';

import classes from '@lib/classes';

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const Component: React.FC<Props> = (props) => {
	const { children, className } = props;

	const classNames = classes(
		'overflow-y flex h-auto w-screen flex-col',
		className,
	);

	return (
		<motion.div
			className={classNames}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			{children}
		</motion.div>
	);
};

export default Component;
