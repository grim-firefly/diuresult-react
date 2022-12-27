import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


	return (

		<h1 className='h-16'>
			<Link to='/'>Home </Link>
			<Link to='/range'>Range </Link>
		</h1>

	);
}
export default Header;