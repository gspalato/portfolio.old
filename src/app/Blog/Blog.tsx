import PageWrapper from '@components/PageWrapper';

import Styles from './Home.module.css';

const Page = () => {
	return (
		<PageWrapper className='flex items-center'>
			<section className='container relative flex h-screen flex-col items-center justify-center gap-6 lg:w-6xl'>
				<h1 className='font-title text-text text-center text-6xl'>
					Blog
				</h1>
				<h2 className='font-body text-text-secondary text-center text-sm tracking-wide'>
					I'm working on this page. Check back later!
				</h2>
			</section>
		</PageWrapper>
	);
};

export default Page;
