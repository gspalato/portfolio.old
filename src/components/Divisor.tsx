import React from 'react';

import classes from '@lib/classes';

type Props = {
	className?: string;
};

const Component: React.FC<Props> = (props) => {
	const { className } = props;

	const classNames = classes(
		'via-overlay-1 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent',
		className,
	);

	return <div className={classNames} />;
};

export default Component;
