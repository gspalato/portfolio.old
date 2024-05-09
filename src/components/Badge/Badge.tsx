import React from 'react';

import Styles from '@components/Badge/Badge.module.css';
import AnimatedBorderVariant from '@components/Badge/variants/AnimatedBorderBadge';

import classes from '@lib/classes';

type Props = {
	className?: string;
	text: string;
	icon?: React.ReactElement;
	style?: React.CSSProperties;

	variant?: 'default' | 'overlay' | 'animated-border';
};

const Component: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
	(props, ref) => {
		const { className, style, text, variant = 'default', ...rest } = props;
		let icon = props.icon;

		const classNames = classes(
			'font-manrope text-text flex min-h-4 min-w-20 items-center justify-center gap-2 rounded-full p-1 px-4 text-[13px] tracking-[.3px] shadow-md backdrop-blur-sm',
			variant === 'default' && 'border-overlay-2 border bg-transparent',
			variant === 'overlay' && 'highlight-white bg-overlay-1',
			className,
		);

		const pulseIndicatorClassnames = classes(
			'h-1 w-1 rounded-full bg-[#00cc00] p-1',
			Styles.pulse,
		);

		icon ??= <div className={pulseIndicatorClassnames} />;

		if (variant === 'animated-border') {
			return <AnimatedBorderVariant ref={ref} {...props} />;
		}

		return (
			<div
				ref={ref}
				className={classNames}
				style={{ ...style }}
				{...rest}
			>
				{icon}
				<span>{text}</span>
			</div>
		);
	},
);

export default Component;
