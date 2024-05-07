import React from 'react';

import classes from '@lib/classes';

type Props = {
	className?: string;
	text: string;
	icon?: React.ReactElement;
	style?: React.CSSProperties;

	ref?: React.Ref<HTMLDivElement>;
};

const Component: React.FC<Props> = (props) => {
	const { className, text, icon, style, ref, ...rest } = props;

	const containerClassnames = classes(
		'group relative grid overflow-hidden rounded-full py-1 px-3 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200',
		className,
	);

	return (
		<div
			ref={ref}
			className={containerClassnames}
			style={{ ...style }}
			{...rest}
		>
			<span>
				<span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:[inset:0_auto_auto_50%] before:aspect-square before:w-[200%] before:[translate:-50%_-15%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-['']" />
			</span>
			<span className='backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900' />
			<div className='relative flex items-center justify-center gap-2'>
				{icon}
				<span className='font-manrope z-10 text-xs font-medium text-neutral-400'>
					{text}
				</span>
			</div>
		</div>
	);
};

export default Component;
