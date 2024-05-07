import React, { useEffect } from 'react';

import Dialog from '@components/Dialog';

type Props = {};

const Component: React.FC<Props> = () => {
	const [isOpen, setOpen] = React.useState(false);

	useEffect(() => {
		const down = (e: any) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return <Dialog isOpen={isOpen} setOpen={setOpen}></Dialog>;
};

export default Component;
