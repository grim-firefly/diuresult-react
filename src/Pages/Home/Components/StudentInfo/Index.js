import React from 'react';

const StudentInfo= ({data}) => {

	const {studentName,batchNo,programName,semesterName,studentId}=data;

	return (
		<div className='bg-blue-400  flex flex-col items-center  gap-3 py-5'>
			<h1 className='font-bold text-lg tracking-wide'>{studentName}</h1>
			<h1 className='font-bold tracking-wide'>{programName}</h1>
			<p className='tracking-wider font-semibold '>Student Id: {studentId}</p>
			<p className=' text-sm tracking-wider font-semibold '> Batch: {batchNo}</p>
			<p className=' text-sm tracking-wider font-semibold '> Enrollment: {semesterName}</p>
		</div>
	);
}
export default StudentInfo;