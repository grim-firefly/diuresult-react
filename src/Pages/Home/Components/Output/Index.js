import React, { useEffect } from 'react';

const Result = ({ data, handleTotalGpa, handleTotalCredit }) => {
	const [credit, setCredit] = React.useState(0);
	useEffect(() => {
		let totalCredit = 0;
		let totalGpa = 0;
		data.forEach((item) => {
			totalCredit += item.totalCredit;
			totalGpa += (item.pointEquivalent ?? 0) * item.totalCredit;
		})
		setCredit(totalCredit);
		handleTotalCredit(totalCredit);
		handleTotalGpa(totalGpa);
	}, [data])
	return (
		<div className="flex flex-col container mx-auto">

			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<div className='text-center bg-blue-300 font-bold text-white tracking-wider py-1'>{data[0].semesterName}-{data[0].semesterYear}</div>
						<table className="min-w-full">
							<thead className="bg-blue-400 border-b">
								<tr >
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Course Code
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Course Title
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Credit
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Grade
									</th>
									<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
										Point
									</th>
								</tr>
							</thead>
							<tbody>

								{
									data.map((item, index) => (
										<tr key={index} className={`bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100`}>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.customCourseId}</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												{item.courseTitle}
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												{item.totalCredit}
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												{item.gradeLetter}
											</td>
											<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												{item.pointEquivalent}
											</td>
										</tr>
									))

								}
								<tr className={`bg-red-300 border-b transition duration-300 ease-in-out hover:bg-gray-100 `}>
									<td className='text-center py-2 font-bold' colSpan={3}>Total Credit: {credit} </td>
									<td className='text-center py-2 font-bold' colSpan={2}>SGPA : {data[0].cgpa ?? 'NAN'} </td>
								</tr>

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Result;