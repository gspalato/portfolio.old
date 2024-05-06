import PageWrapper from '@components/PageWrapper';

import Styles from './Home.module.css';

const Page = () => {
	return (
		<PageWrapper className='flex justify-center'>
			<section className='relative flex h-screen max-w-7xl flex-1 items-center justify-center'>
				<h1 className='font-title text-glow text-center text-[80px] leading-[80px] text-[#eee]'>
					About
				</h1>
				<div className='background-glow' />
			</section>
		</PageWrapper>
	);
};

export default Page;
