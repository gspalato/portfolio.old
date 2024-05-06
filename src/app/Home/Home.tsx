import { LiaArrowDownSolid } from 'react-icons/lia';

import Card from '@components/Card';
import Divisor from '@components/Divisor';
import PageWrapper from '@components/PageWrapper';

const Page = () => {
	return (
		<PageWrapper className='flex items-center'>
			<section className='container relative flex h-screen items-center justify-center lg:w-6xl'>
				<h1 className='font-title text-glow text-center text-[10vw] leading-[10vw] text-[#eee] md:text-[80px] md:leading-[80px]'>
					Full-stack developer
					<br />& computer engineering
					<br />
					student.
				</h1>
				<div className='background-glow' />
				<LiaArrowDownSolid
					size={30}
					className='absolute bottom-4 left-1/2 -translate-x-1/2 transform animate-bounce text-4xl text-[#eee]'
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
