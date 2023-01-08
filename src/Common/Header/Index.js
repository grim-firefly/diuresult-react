import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


	return (

		<div className=' my-6 flex justify-center '>
			<Link className='bg-blue-400 text-white mx-1 px flex justify-center px-4 py-2' to='/'>Home </Link>
			<Link className='bg-blue-400 text-white mx-1 px-4 py-2' to='/range'>Range </Link>
			<Link className='bg-blue-400 text-white mx-1 px-4 py-2' to='/instruction'>Instruction </Link>
			<a className='bg-blue-400 text-white mx-1 px-4 py-2' href='https://khairulhasansajid.netlify.app/'>Author</a>
		</div>

	);
}
export default Header;