import React from 'react';
import s from './style.module.css';
const Input = ({ label, type, handleData,...rest }) => {

	return (
		<div className='relative'>
			<input onBlur={(e)=>handleData(e.target.value)} required className={`border  border-blue-400 px-2 py-1.5 outline-none ${s.inputbox} w-full`} type={type ?? "text"} placeholder={label} {...rest}/>
			<label className={`text-sm ${s.inputlabel} `}>{label}</label>
		</div>
	);
}
export default Input;