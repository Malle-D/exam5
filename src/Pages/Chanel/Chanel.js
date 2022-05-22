import { useEffect, useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import Personal from './Personal/Personal';
import './chanel.css';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Chanel = () => {
	const parametr = useParams();

	const [personal, setPersonal] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [individual, setIndividual] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/photos', {
				params: {
					id: parametr.id,
				},
			})
			.then(function (response) {
				setPersonal({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setPersonal({
					isFetched: true,
					data: null,
					error: error,
				});
			});

		axios
			.get('https://jsonplaceholder.typicode.com/albums', {
				params: {
					id: parametr.id,
				},
			})
			.then(function (response) {
				setIndividual({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setIndividual({
					isFetched: true,
					data: null,
					error: error,
				});
			});
	}, [parametr]);

	if (personal.isFetched && individual.isFetched) {
		return (
			<>
				<div className='chanels-inside'>
					<Nav />
					<Personal
						mainvideo={`https://picsum.photos/id/${individual.data[0].id}6/500/250`}
						src={`https://picsum.photos/id/${individual.data[0].id}3/1250/300`}
						videoId={`${personal.data[0].id}6`}
						name={individual.data[0].title}
						secondTitle={personal.data[0].title}
					/>
				</div>
			</>
		);
	}
};

export default Chanel;
