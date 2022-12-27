import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


	return (

		<h1 className=' my-6 flex justify-center '>
			<Link className='bg-blue-400 text-white mx-1 px flex justify-center px-4 py-2' to='/'>Home </Link>
			<Link className='bg-blue-400 text-white mx-1 px-4 py-2' to='/range'>Range </Link>
		</h1>

	);
}
export default Header;