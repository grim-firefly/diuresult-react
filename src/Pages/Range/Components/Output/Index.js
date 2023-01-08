import React, { useState } from 'react';



const AllResult = ({ data }) => {
	
	return (
		<div className="flex flex-col container mx-auto">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full border">
							<thead className="bg-blue-400 border-b">
								<tr >
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										ID
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Name
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Semester
									</th>

									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										CGPA
									</th>
								</tr>
							</thead>
							<tbody>



								{
									data.map((item, index) => (
										<tr key={index} className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100`}>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
											<td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
												{item.name}
											</td>
											<td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
												sping 2021
											</td>
											<td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
												{item.cgpa}
											</td>

										</tr>
									))
								}



							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AllResult;