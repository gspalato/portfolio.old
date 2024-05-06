import { Link, NavLink } from 'react-router-dom';

import classes from '@/lib/classes';

import { routes } from '@/router';

type Props = {
	position?: 'top' | 'bottom';
};

const Component: React.FC<Props> = (props) => {
	const { position = 'bottom' } = props;

	const navClasses = classes(
		'fixed z-10 flex h-[120px] w-screen items-center justify-center from-black/40 to-transparent',
		position === 'bottom' ? 'bottom-[0%]' : 'top-[0%]',
		position === 'bottom' ? 'bg-gradient-to-t' : 'bg-gradient-to-b',
	);

	return (
		<nav id='nav' className={navClasses}>
			<div className='border-overlay-2 bg-overlay-1 flex h-[50px] min-w-[180px] gap-2 rounded-full border backdrop-blur-md'>
				<div className='flex w-full justify-between gap-2 p-1'>
					{routes.map((route) => (
						<Link
							to={route.path}
							className='hover:bg-overlay-1 flex min-w-[80px] items-center justify-center rounded-full p-1 transition-colors duration-150'
						>
							<p className='font-body text-center text-sm font-medium tracking-tight text-white/80'>
								{route.name}
							</p>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Component;
