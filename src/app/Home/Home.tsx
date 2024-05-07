import { AnimatePresence, motion } from 'framer-motion';
import { LiaArrowDownSolid } from 'react-icons/lia';

import Badge from '@components/Badge/Badge';
import Card from '@components/Card';
import Divisor from '@components/Divisor';
import PageWrapper from '@components/PageWrapper';

import classes from '@lib/classes';

import Styles from './Home.module.css';

const AnimatedBadge = motion(Badge);
const AnimatedCard = motion(Card);

const Page = () => {
	const heroTextClassnamesMobile = classes(
		'text-glow font-title text-center text-[17.5vw] font-bold leading-[17.5vw] tracking-tight text-[#eee] sm:hidden',
		Styles.hero_text_glow,
	);

	const heroTextClassnamesDesktop = classes(
		'text-glow font-title hidden text-center text-[10vw] font-bold leading-[10vw] tracking-tight text-[#eee] sm:block md:text-[90px] md:leading-[90px]',
		Styles.hero_text_glow,
	);

	return (
		<PageWrapper className='flex items-center'>
			<section className='container !sm:pb-0 relative flex h-[100dvh] flex-col items-center justify-center gap-6 lg:w-6xl'>
				<AnimatedBadge text='Available for work!' />
				<AnimatePresence>
					<motion.h1
						key='hero-text-desktop'
						className={heroTextClassnamesDesktop}
					>
						Full-stack developer
						<br />& computer engineering
						<br />
						student.
					</motion.h1>
					<motion.h1
						key='hero-text-mobile'
						className={heroTextClassnamesMobile}
					>
						Full-stack
						<br />
						developer
						<br />& computer
						<br />
						engineering
						<br />
						student.
					</motion.h1>
				</AnimatePresence>
				<div
					key='hero-background-glow'
					className={classes(
						Styles.hero_background_glow,
						Styles.hero_background_glow_center,
					)}
				/>
				<LiaArrowDownSolid
					size={30}
					className='text-overlay-4 animate-bounce text-4xl'
				/>
			</section>
			<Divisor />
			<section className='container flex h-screen w-full flex-col gap-20 pt-20 px-8 lg:w-6xl lg:px-0'>
				<h1 className='font-title text-text text-center text-5xl'>
					Projects
				</h1>
				<div className='flex flex-1 grow-1 flex-col items-center'>
					<AnimatedCard
						className='min-h-40 min-w-40'
						initial={{ opacity: 0, y: 30, x: 30 }}
						whileInView={{ opacity: 1, y: 0, x: 0 }}
						exit={{ opacity: 0, y: -30, x: -30 }}
						transition={{
							type: 'tween',
							ease: 'easeInOut',
							duration: 0.35,
						}}
					></AnimatedCard>
				</div>
			</section>
		</PageWrapper>
	);
};

export default Page;
