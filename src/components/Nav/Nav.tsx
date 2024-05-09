import { FileTextIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';

import Divisor from '@components/Divisor';

import Navlink from '@/components/Navlink/Navlink';

import classes from '@lib/classes';
import { useLayout } from '@lib/layout';

import { NAVBAR_ICON_SIZE } from '@constants/icons';
import { SOCIAL_LINKS } from '@constants/social';

import { routes } from '@/routes';

export const SocialLinks = [
	{
		name: 'GitHub',
		url: SOCIAL_LINKS.github,
		icon: (
			<FaGithub
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text pb-px'
			/>
		),
	},
	{
		name: 'LinkedIn',
		url: SOCIAL_LINKS.linkedin,
		icon: (
			<FaLinkedinIn
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text'
			/>
		),
	},
	{
		name: 'Resume',
		url: SOCIAL_LINKS.resume,
		icon: (
			<FileTextIcon
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text pl-px'
			/>
		),
	},
];

type Props = {
	position?: 'top' | 'bottom';
	variants?: ('highlight' | 'normal')[];
};

const Component: React.FC<Props> = (props) => {
	let { position, variants } = props;

	const currentPath = useLocation().pathname;
	const currentPathIdx = routes.findIndex((route) => {
		return route.path === currentPath;
	});

	const [activeIdx, setActiveIdx] = useState<number>(currentPathIdx);

	const navigate = useNavigate();

	const { navbarPosition } = useLayout();
	position = position ?? navbarPosition;

	const navClassnames = classes(
		'h-nav fixed z-10 flex w-screen items-center justify-center from-black/40 to-transparent',
		position === 'bottom' ? 'bottom-[0%]' : 'top-[0%]',
		position === 'bottom' ? 'bg-gradient-to-t' : 'bg-gradient-to-b',
	);

	const pillClassnames = classes(
		'border-overlay-2 bg-overlay-1 flex h-[45px] w-auto items-start justify-center rounded-full border backdrop-blur-md backdrop-saturate-150',
		variants?.includes('highlight') && 'shadow-inner shadow-neutral-300/5',
	);

	useEffect(() => {
		const down = (e: any) => {
			switch (e.key) {
				case 39:
					console.log('right');
					navigate(routes[(activeIdx + 1) % routes.length].path);
					break;

				case 37:
					console.log('left');
					navigate(
						routes[(activeIdx - 1 + routes.length) % routes.length]
							.path,
					);
					break;
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<nav id='nav' className={navClassnames}>
			<motion.div
				className={pillClassnames}
				initial={{ y: position === 'top' ? -100 : 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.5,
					duration: 0.75,
					ease: [0.64, 0.77, 0.58, 0.98],
				}}
			>
				<motion.div className='flex h-full w-auto justify-between gap-2 p-1'>
					<AnimatePresence>
						{routes.map((route, index) => (
							<Navlink
								key={route.path}
								name={route.name}
								to={route.path}
								onClick={() => setActiveIdx(index)}
								className={classes('group relative z-[1]', {
									'z-0': activeIdx === index,
								})}
							>
								{activeIdx === index && (
									<motion.div
										layoutId='clicked-button'
										transition={{ duration: 0.2 }}
										className='highlight-white bg-overlay-2 pointer-events-none absolute inset-0 rounded-full'
									/>
								)}
								{route.icon}
							</Navlink>
						))}
					</AnimatePresence>
					<Divisor direction='vertical' />
					{SocialLinks.map((link, index) => (
						<Navlink
							key={link.url}
							name={link.name}
							to={link.url}
							onClick={() => setActiveIdx(index)}
						>
							{link.icon}
						</Navlink>
					))}
				</motion.div>
			</motion.div>
		</nav>
	);
};

export default Component;
