import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import React from 'react';

import classes from '@lib/classes';

type Props = {
	className?: string;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className } = props;

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const containerClassnames = classes(
		'group relative w-full max-w-[350px] overflow-hidden rounded-xl',
		className,
	);

	return (
		<div
			onMouseMove={(e) => {
				const { left, top } = e.currentTarget.getBoundingClientRect();

				mouseX.set(e.clientX - left);
				mouseY.set(e.clientY - top);
			}}
			className={containerClassnames}
		>
			<motion.div className='absolute top-0 right-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent' />
			<motion.div
				className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
				style={{
					background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
					`,
				}}
			/>
			<div className='relative flex flex-col gap-3 rounded-xl border border-white/10 py-5 px-4'>
				{children}
			</div>
		</div>
	);
};

export default Component;
