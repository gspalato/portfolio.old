import PageWrapper from '@components/PageWrapper';

import Divisor from '@/components/Divisor';

const Page = () => {
	return (
		<PageWrapper className='flex items-center'>
			<section className='container relative flex h-screen flex-col items-center justify-center gap-4 gap-6 lg:w-6xl'>
				<h1 className='font-title text-text text-center text-6xl'>
					About Me
				</h1>
				<h2 className='font-body text-text-secondary text-center text-sm tracking-wide'>
					I'm working on this page. Check back later!
				</h2>
			</section>
			<Divisor />
			<section className='container flex h-screen w-full flex-col gap-20 pt-20 px-8 lg:w-6xl lg:px-0'></section>
		</PageWrapper>
	);
};

export default Page;
