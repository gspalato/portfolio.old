import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';

import classes from '@/lib/classes';

type Props = {
	className?: string;
	style?: React.CSSProperties;

	tiltOnHover?: boolean;
	hoverTiltDegreesX?: number;
	hoverTiltDegreesY?: number;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const {
		children,
		className,
		hoverTiltDegreesX = 7.5,
		hoverTiltDegreesY = 7.5,
		tiltOnHover = true,
		style,
	} = props;

	const classNames = classes(
		'bg-overlay-1 border-overlay-2 relative h-72 w-96 rounded-md border backdrop-blur-md',
		'transition-shadow duration-300 hover:shadow-lg',
		'bg-gradient-to-tl from-black to-[#111]',
		className,
	);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		[`${hoverTiltDegreesX}deg`, `-${hoverTiltDegreesX}deg`],
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		[`-${hoverTiltDegreesY}deg`, `${hoverTiltDegreesY}deg`],
	);

	const onMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
		const element = e.currentTarget;
		const rect = element.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPercentage = mouseX / width - 0.5;
		const yPercentage = mouseY / height - 0.5;

		x.set(xPercentage);
		y.set(yPercentage);
	};

	const onMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			className={classNames}
			style={{
				transformStyle: 'preserve-3d',
				rotateX: tiltOnHover ? rotateX : undefined,
				rotateY: tiltOnHover ? rotateY : undefined,
				...style,
			}}
			whileHover={{
				translateZ: -20,
			}}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</motion.div>
	);
};

export default Component;
