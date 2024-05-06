import { LiaArrowDownSolid } from 'react-icons/lia';

import Card from '@components/Card';
import Divisor from '@components/Divisor';
import PageWrapper from '@components/PageWrapper';

import Badge from '@/components/Badge/Badge';

import classes from '@lib/classes';

import Styles from './Home.module.css';

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
			<section className='container relative flex h-screen flex-col items-center justify-center gap-6 lg:w-6xl'>
				<Badge text='Available for work!' />
				<h1 className={heroTextClassnamesDesktop}>
					Full-stack developer
					<br />& computer engineering
					<br />
					student.
				</h1>
				<h1 className={heroTextClassnamesMobile}>
					Full-stack
					<br />
					developer
					<br />& computer
					<br />
					engineering
					<br />
					student.
				</h1>
				<div
					className={classes(
						Styles.hero_background_glow,
						Styles.hero_background_glow_center,
					)}
				/>
				<LiaArrowDownSolid
					size={30}
					className='mt-4 animate-bounce text-4xl text-[#eee]'
				/>
			</section>
			<Divisor />
			<section className='container flex h-screen w-full flex-col gap-20 pt-20 px-8 lg:w-6xl lg:px-0'>
				<h1 className='font-title text-text text-center text-5xl'>
					Projects
				</h1>
				<div className='flex flex-1 grow-1 flex-col items-center'>
					<Card></Card>
				</div>
			</section>
		</PageWrapper>
	);
};

export default Page;
