import React from 'react';
import Header from './../../Common/Header/Index';
import Chrome1 from './../../Assets/Instruction/Chrome1.png';
import Chrome2 from './../../Assets/Instruction/Chrome2.png';
import Chrome3 from './../../Assets/Instruction/Chrome3.png';
import Chrome4 from './../../Assets/Instruction/Chrome4.png';
import Firefox1 from './../../Assets/Instruction/Firefox1.png';
import Firefox2 from './../../Assets/Instruction/Firefox2.png';
import Firefox3 from './../../Assets/Instruction/Firefox3.png';
const Instruction = () => {
	return (
		<div>
			<Header />
			<div className='flex text-3xl font-bold justify-center'> Instruction </div>
			<p className='text-center'> Diu API is running on HTTP protocol but netlify is in HTTPS protocol.. Thats why we need to allow Insecure Content</p>
			<div className='text-center my-2 text-xl font-bold py-4'>Google Chrome</div>
			<div className='flex flex-col items-center my-2'>
				<img src={Chrome1} alt='Chrome1' className='w-1/2 mx-auto' />
				<p className='py-2'> Like The above Image Click on the Lock icon </p>
				<img src={Chrome2} alt='Chrome2' className='w-1/2 mx-auto' />
				<p className='py-2'> Then click on <b>Site Setting</b> button </p>
				<img src={Chrome3} alt='Chrome2' className='w-1/2 h-1/2 mx-auto' />
				<p className='py-2'> Then Scroll down.. untill you find <b>Insecure Content</b> menu </p>
				<img src={Chrome4} alt='Chrome2' className='w-1/2 h-1/2 mx-auto' />
				<p className='py-2'> Click on the dropdown menu and <b>allow it </b>  </p>
				<p className='py-2'> Thats all.. Now Our Website will work fine  </p>
			</div>


			<div className='text-center my-2 text-xl font-bold py-4'>Mozilla Firefox</div>
			<div className='flex flex-col items-center my-2 '>
				<img src={Firefox1} alt='Chrome1' className='w-1/2 mx-auto' />
				<p className='py-2'> Like The above Image Click on the Lock icon </p>
				<img src={Firefox2} alt='Chrome2' className='w-1/2 mx-auto' />
				<p className='py-2'> Then click on <b> Connection Secure</b> button </p>
				<img src={Firefox3} alt='Chrome2' className='w-1/2 h-1/2 mx-auto' />
				<p className='py-2'> Click on <b>Disable Protection</b> Button </p>
				<p className='py-2'> Thats all.. Now Our Website will work fine  </p>
			</div>


		</div>
	);
}
export default Instruction;