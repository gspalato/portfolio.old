import {
	FileTextIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import Divisor from '@components/Divisor';
import Navlink from '@components/Navlink';

import classes from '@lib/classes';
import { useLayout } from '@lib/layout';

import { NAVBAR_ICON_SIZE } from '@constants/icons';
import { SOCIAL_LINKS } from '@constants/social';

import { routes } from '@/routes';

const SocialLinks = [
	{
		name: 'GitHub',
		url: SOCIAL_LINKS.github,
		icon: (
			<GitHubLogoIcon
				height={NAVBAR_ICON_SIZE}
				width={NAVBAR_ICON_SIZE}
				className='text-text'
			/>
		),
	},
	{
		name: 'LinkedIn',
		url: SOCIAL_LINKS.linkedin,
		icon: (
			<LinkedInLogoIcon
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
				className='text-text'
			/>
		),
	},
];

type Props = {
	position?: 'top' | 'bottom';
};

const Component: React.FC<Props> = (props) => {
	let { position } = props;

	const linkContainerRef = useRef();

	useEffect(() => {}, [linkContainerRef]);

	const { navbarPosition } = useLayout();
	position = position ?? navbarPosition;

	const navClasses = classes(
		'fixed z-10 flex h-[100px] w-screen items-center justify-center from-black/40 to-transparent',
		position === 'bottom' ? 'bottom-[0%]' : 'top-[0%]',
		position === 'bottom' ? 'bg-gradient-to-t' : 'bg-gradient-to-b',
	);

	return (
		<nav id='nav' className={navClasses}>
			<motion.div className='absolute top-0 left-0 h-[2px] w-6 rounded-tl rounded-tr bg-white' />
			<motion.div
				className='border-overlay-2 bg-overlay-1 flex h-[45px] max-w-[75%] min-w-[180px] rounded-full border shadow-[0_10px_25px_rgba(0,0,0,.15)] backdrop-blur-md'
				initial={{ y: position === 'top' ? -100 : 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.5,
					duration: 0.75,
					ease: [0.64, 0.77, 0.58, 0.98],
				}}
			>
				<motion.div
					className='flex w-full justify-between gap-1 p-1'
					ref={linkContainerRef as any}
				>
					{routes.map((route) => (
						<Navlink to={route.path}>{route.icon}</Navlink>
					))}
					<Divisor direction='vertical' className='mx-1' />
					{SocialLinks.map((link) => (
						<Navlink to={link.url}>{link.icon}</Navlink>
					))}
				</motion.div>
			</motion.div>
		</nav>
	);
};

export default Component;
