import { motion } from 'framer-motion';
import React from 'react';

import classes from '@lib/classes';

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const AnimationVariants = {
	hidden: { opacity: 0, y: 10, scale: 0.5 },
	visible: { opacity: 1, y: 0, scale: 1 },
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
			variants={AnimationVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			transition={{ duration: 0.2 }}
		>
			{children}
		</motion.div>
	);
};

export default Component;
