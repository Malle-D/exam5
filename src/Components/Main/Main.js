import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';
import Dollie from '../../Assets/images/Dollie.png';
import Malle from '../../Assets/images/1.jpg';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './base.css';

const Main = ({videoId}) => {
	const [video, setVideo] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [recom, setRecom] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [random, setRandom] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/photos', {
				params: {
					albumId: 1,
				},
			})
			.then(function (response) {
				setVideo({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setVideo({
					isFetched: true,
					data: null,
					error: error,
				});
			});
		axios
			.get('https://jsonplaceholder.typicode.com/photos', {
				params: {
					albumId: 4,
				},
			})
			.then(function (response) {
				setRecom({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setRecom({
					isFetched: true,
					data: null,
					error: error,
				});
			});

		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then(function (response) {
				setRandom({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setRandom({
					isFetched: true,
					data: null,
					error: error,
				});
			});
	}, []);

	return ( 
		// className={color === "qora" ? "dark" : "light"}
		<div >
			<div className='main-inner'>
				<div className='main-box'>
					<div className='name-title'>
						<img
							className='chanel-img'
							src={Dollie}
							alt='channel image'
						/>
						<h2 className='chanel-name'>Quidem Molestiae Enim</h2>
					</div>

					<div className='videos-box'>
						{video.isFetched &&
							video.data.splice(0, 9).map((e) => {
								return (
									<NavLink key={e.id} to={`/video/${e.id}`}>
										<VideoCard
											source={`https://picsum.photos/id/${e.id}/400/200`}
											title={e.title}
											view={e.id}
										/>
									</NavLink>
								);
							})}
					</div>
				</div>

				<h2 className='chanel-name'>Recommended Videos for You</h2>
				<div className='random-render-box'>
					{random.isFetched &&
						random.data.splice(0, 20).map((e) => {
							return (
								<NavLink key={e.id} to={`/video/${e.id}`}>
									<VideoCard
										source={`https://picsum.photos/id/${e.id}/470/250`}
										title={e.title}
										view={e.id}
									/>
								</NavLink>
							);
						})}
				</div>

				<div className='main-box'>
					<div className='name-title'>
						<img
							className='chanel-img'
							src={Malle}
							alt='channel image'
						/>
						<h2 className='chanel-name'>Saepe Unde Necessitatibus Rem</h2>
						<p className='recom-text'>Recommended channel for you</p>
						<NavLink className='sub-button' to={`/chanel/${videoId}`}>
							Subscribe 2.3m
						</NavLink>
					</div>
					<div className='videos-box'>
						{recom.isFetched &&
							recom.data.splice(0, 12).map((e) => {
								return (
									<NavLink key={e.id} to={`/video/${e.id}`}>
										<VideoCard
											source={`https://picsum.photos/id/${e.id}/400/200`}
											title={e.title}
											view={e.id}
										/>
									</NavLink>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Main;
