import React, { useState } from 'react';
import Header from './../../Common/Header/Index';
import Input from './../../Common/Input/Index';
import Select from './../../Common/Select/Index';
import { useEffect } from 'react';
import axios from 'axios';
import Button from './../../Common/Button/Index';
import { BeatLoader } from 'react-spinners';
import { BsGithub, BsPrinter } from 'react-icons/bs';
import AllResult from './Components/Output/Index';


const Range = () => {
	const [fromId, setFromId] = useState('');
	const [endId, setEndId] = useState('');
	const [loading, setLoading] = useState(false);
	const [resultLoading, setResultLoading] = useState(false);
	const [semesterId, setSemesterId] = useState('all');
	const [semesterList, setSemesterList] = useState([]);
	const [studentResult, setStudentResult] = useState([]);

	const handleFromId = (id) => {
		setFromId(id);
		setStudentResult([]);


	}
	const handleEndId = (id) => {
		setEndId(id);
		setStudentResult([]);


	}
	const handleSemesterid = (id) => {
		setSemesterId(id);

	}

	useEffect(() => {
		setLoading(true);
		const getSemester = async () => {
			const response = await axios.get('http://software.diu.edu.bd:8189/result/semesterList');
			return response.data;
		}
		getSemester().then((data) => {
			setSemesterList(data);
			setLoading(false);
		}).catch((err) => {
			console.log(err);
			setLoading(false);
		})
	}, [])

	const handlePrint = (e) => {
		e.preventDefault();
		const notprintable = document.querySelector('#infoGather');

		notprintable.style.display = 'none';
		window.print();
		notprintable.style.display = 'block';

	}

	const getStudentResult = async (studentId) => {
		if (semesterId === 'all') {
			for (let i = 0; i < semesterList.length; i++) {
				const response = await axios.get(`http://software.diu.edu.bd:8189/result`, {
					params: {
						studentId: studentId,
						semesterId: semesterList[i].semesterId,
						grecaptcha: ''
					}
				})
				if (response.data.length > 0) {


				}
			}
		}
		else {

			const response = await axios.get(`http://software.diu.edu.bd:8189/result`, {
				params: {
					studentId: studentId,
					semesterId: semesterId,
					grecaptcha: ''
				}
			})
			if (response.data.length > 0) {

				return response.data[0].cgpa ?? 'No Result';
			}
			return 'No Result';
		}
		return 'No Result';
	}
	const getStudentInfo = async (studentId) => {
		const response = await axios.get(`http://software.diu.edu.bd:8189/result/studentInfo`, {
			params: {
				studentId: studentId
			}
		});
		return response.data.studentName;
	}

	const getResult = () => {
		setStudentResult([]);
		let fromArray = fromId.split('-');
		let endArray = endId.split('-');
		if (fromArray[0] != endArray[0] || fromArray[1] != endArray[1]) {
			alert('Please enter the same Dept Id');

			return false;
		}

		let from = parseInt(fromArray[2]);
		let end = parseInt(endArray[2]);
		const df = Math.abs(from - end);
		setResultLoading(true);
		for (let i = from; i <= end; i++) {
			let studentId = fromArray[0] + '-' + fromArray[1] + '-' + i;

			// let res = [studentId];
			let res = {}
			res['id'] = studentId;
			getStudentInfo(studentId).then((data) => {
				// res.push(data);
				res['name'] = data;
				return getStudentResult(studentId);
			}).then((data) => {
				res['cgpa'] = data;
				if (i === end) {
					setResultLoading(false);
				}

			}).catch((err) => {
				console.log(err);
				if (i === end) {
					setResultLoading(false);
				}

			})

			setStudentResult((prev) => {
				return [
					...prev,
					res
				]

			})

		}





	}

	return (
		<div>

			{(loading || resultLoading) && <div className='loader'>
				<BeatLoader size={20} color="#60A5FA" />
			</div>
			}
			<div id="infoGather">
				<Header />
				<div className='flex justify-center text-3xl items-center mb-5'><a href='https://github.com/grim-firefly/diuresult-react'> <BsGithub/> </a> </div>
				{!loading &&
					<div  className={`w-full px-4  sm:w-96 mx-auto flex flex-col gap-4`}>
						<div>
							<Input defaultValue={fromId} label="Start From ID" type="text" handleData={handleFromId} />

						</div>
						<div>
							<Input defaultValue={endId} label="End ID" type="text" handleData={handleEndId} />

						</div>
						<div>
							<Select defaultValue={semesterId} data={semesterList} handleData={handleSemesterid} />
						</div>
						<div className='-mt-2'>
							<Button title="Get Result" onClick={getResult} />
						</div>

					</div>

				}
				{
					studentResult.length > 0 &&
					<div  className='container mx-auto mt-2 '>
						<button className='bg-red-400 px-2 py-2 rounded-md text-white flex items-center gap-2' onClick={handlePrint} > Print Result <i> <BsPrinter /> </i> </button>
					</div>
				}
			</div>
			{!resultLoading && studentResult.length > 0 && <AllResult data={studentResult} />}



		</div >
	);
}
export default Range;