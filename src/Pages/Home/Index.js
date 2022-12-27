import React, { useState } from 'react';
import Header from './../../Common/Header/Index';
import Input from './../../Common/Input/Index';
import Select from './../../Common/Select/Index';
import { useEffect } from 'react';
import axios from 'axios';
import Button from './../../Common/Button/Index';
import { BeatLoader } from 'react-spinners';
import StudentInfo from './Components/StudentInfo/Index';
import Result from './Components/Output/Index';
import { BsPrinter } from 'react-icons/bs';


const Home = () => {
	const [studentId, setStudentId] = useState('');
	const [loading, setLoading] = useState(false);
	const [resultLoading, setResultLoading] = useState(false);
	const [semesterId, setSemesterId] = useState('all');
	const [semesterList, setSemesterList] = useState([]);
	const [studentInfo, setStudentInfo] = useState(null);
	const [studentResult, setStudentResult] = useState(null);
	const [totalCredit, setTotalCredit] = useState(0);
	const [totalGpa, setTotalGpa] = useState(0);
	const handleStudentid = (id) => {
		setStudentId(id);
		setTotalCredit(0);
		setTotalGpa(0);
	}
	const handleSemesterid = (id) => {
		setSemesterId(id);
		setTotalCredit(0);
		setTotalGpa(0);
	}
	const handleTotalCredit = (credit) => {
		setTotalCredit((prev) => prev + credit);
	}
	const handleTotalGpa = (gpa) => {
		setTotalGpa((prev) => prev + gpa);
	}
	useEffect(() => {
		setLoading(true);
		const getSemester = async () => {
			const response = await axios.get('//software.diu.edu.bd:8189/result/semesterList', {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',

				}
			});
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
		const printbtn = document.querySelector('#printbtn');

		notprintable.style.display = 'none';
		printbtn.style.display = 'none';
		window.print();
		notprintable.style.display = 'block';
		printbtn.style.display = 'block';

	}


	const getResult = () => {
		setResultLoading(true);
		const getStudentInfo = async () => {
			const response = await axios.get(`//software.diu.edu.bd:8189/result/studentInfo`, {
				params: {
					studentId: studentId
				}
			});
			return response.data;
		}
		const getStudentResult = async () => {
			const res = [];
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
						res.push(response.data);

					}
				}
				return res;
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

					res.push(response.data);
				}
			}
			return res;
		}
		getStudentInfo().then((data) => {
			setStudentInfo(data);
			return getStudentResult();
		}).then((data) => {
			// console.log(data);
			setStudentResult(data);
			setResultLoading(false);
		})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			})
	}

	return (
		<div>
			<Header />

			{(loading || resultLoading) && <div className='loader'>
				<BeatLoader size={20} color="#60A5FA" />
			</div>
			}
			{!loading &&
				<div id="infoGather" className={`w-full px-4  sm:w-96 mx-auto flex flex-col gap-2`}>
					<div>
						<Input defaultValue={studentId} label="Student ID" type="text" handleData={handleStudentid} />

					</div>
					<div>
						<Select defaultValue={semesterId} data={semesterList} handleData={handleSemesterid} />
					</div>
					<div>
						<Button title="Get Result" onClick={getResult} />
					</div>

				</div>

			}

			{
				!resultLoading && studentResult && studentResult &&
				<div id="printbtn" className='container mx-auto mt-2 '>
					<button className='bg-red-400 px-2 py-2 rounded-md text-white flex items-center gap-2' onClick={handlePrint} > Print Result <i> <BsPrinter /> </i> </button>
				</div>
			}
			{!resultLoading && studentInfo &&
				<div className='mt-2 container mx-auto'>

					<StudentInfo data={studentInfo} />
				</div>
			}

			{!resultLoading && studentResult &&
				<>
					{studentResult.map((data, index) => (
						<div key={index} className='mt-2'>
							<Result handleTotalCredit={handleTotalCredit} handleTotalGpa={handleTotalGpa} data={data} />
						</div>

					))
					}
					<div className='flex flex-col md:flex-row  container bg-blue-400 text-white py-4 mb-10 justify-around mx-auto'>
						<h1 className='text-center text-xl font-bold'>Total Completed Credit: {totalCredit}</h1>
						<h1 className='text-center text-xl font-bold'>CGPA: {(totalGpa / totalCredit).toFixed(2)}</h1>
					</div>
				</>
			}
		</div >
	);
}
export default Home;