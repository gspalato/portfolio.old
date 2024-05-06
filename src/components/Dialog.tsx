import { motion } from 'framer-motion';

import classes from '@/lib/classes';

type Props = {
	className?: string;
	style?: React.CSSProperties;

	isOpen: boolean;
	setOpen?: (open: boolean) => void;
} & React.PropsWithChildren;

const Component: React.FC<Props> = (props) => {
	const { children, className, isOpen, setOpen, style } = props;

	const classNames = classes(
		'container fixed z-20 h-screen w-screen bg-black/25 backdrop-blur-sm',
		className,
	);

	console.log(isOpen);

	return (
		<motion.div
			className={classNames}
			style={{ pointerEvents: isOpen ? 'all' : 'none', ...style }}
			animate={{ opacity: isOpen ? 1 : 0 }}
			onClick={() => setOpen && setOpen(false)}
		>
			{children}
		</motion.div>
	);
};

export default Component;
