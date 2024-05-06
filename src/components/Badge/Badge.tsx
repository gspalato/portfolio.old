import React from 'react';

import Styles from '@components/Badge/Badge.module.css';

import classes from '@lib/classes';

type Props = {
	className?: string;
	text: string;
	icon?: React.ReactElement;
	style?: React.CSSProperties;
};

const Component: React.FC<Props> = (props) => {
	const { className, icon, style, text } = props;

	const classNames = classes(
		'highlight-white bg-overlay-1 font-manrope text-text flex min-h-4 min-w-20 items-center justify-center gap-2 rounded-full p-1 px-4 text-sm tracking-[.3px] shadow-md backdrop-blur-sm',
		className,
	);

	const pulseIndicatorClassnames = classes(
		'h-1 w-1 rounded-full bg-[#00cc00] p-1',
		Styles.pulse,
	);

	return (
		<div className={classNames} style={{ ...style }}>
			{icon ?? <div className={pulseIndicatorClassnames} />}
			<span>{text}</span>
		</div>
	);
};

export default Component;
