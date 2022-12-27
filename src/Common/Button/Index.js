import React from 'react';

const Button = ({title,...rest}) => {
	return (
		<button className='bg-blue-400 px-2 py-1.5 text-white' {...rest}>
			{title}
		</button>
	);
}
export default Button;