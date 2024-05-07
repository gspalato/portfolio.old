import React from 'react';

import classes from '@lib/classes';

type Props = {
	className?: string;
	direction?: 'horizontal' | 'vertical';
};

const Component: React.FC<Props> = (props) => {
	const { className, direction = 'horizontal' } = props;

	const classNames = classes(
		'via-overlay-2 from-transparent to-transparent',
		direction === 'horizontal'
			? ' h-[1px] w-full bg-gradient-to-r'
			: 'h-full w-[1px] bg-gradient-to-b',
		className,
	);

	return <div className={classNames} />;
};

export default Component;
