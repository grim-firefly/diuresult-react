import React from 'react';

const Select = ({ data, handleData,...rest }) => {
	return (
		<div>
			<div className="flex justify-center">
				<div className="mb-3 w-full">
					<select onBlur={(e) => handleData(e.target.value)} className="form-select appearance-none block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat  border border-solid border-blue-400 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none" defaultValue="all" aria-label="Default select example" {...rest}>
						<option value="all">All</option>
						{
							data.map((item, index) => {
								return (
									<option key={index} value={item.semesterId}>{item.semesterName} {item.semesterYear}</option>
								)
							})
						}
					</select>
				</div>
			</div>
		</div>
	);
}
export default Select;