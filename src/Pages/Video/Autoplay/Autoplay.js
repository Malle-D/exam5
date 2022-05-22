import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import VideoCard from '../../../Components/VideoCard/VideoCard';
import './autoplay.css';

const Autoplay = () => {
	const [auto, setAuto] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/photos')
			.then(function (response) {
				setAuto({
					isFetched: true,
					data: response.data,
					error: false,
				});
			})
			.catch(function (error) {
				setAuto({
					isFetched: true,
					data: null,
					error: error,
				});
			});
	}, []);

	return (
		<div className='auto-box'>
			<div className='auto-titles'>
				<h2 className='auto-head'>Next</h2>
				<p className='auto-name'>
					AUTOPLAY{' '}
					<svg
						className=''
						width='44'
						height='28'
						viewBox='0 0 44 28'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							opacity='0.3'
							width='44'
							height='28'
							rx='14'
							fill='#EBEBEB'
						/>
						<g filter='url(#filter0_dd_0_585)'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M30 26C36.6274 26 42 20.6274 42 14C42 7.37258 36.6274 2 30 2C23.3726 2 18 7.37258 18 14C18 20.6274 23.3726 26 30 26Z'
								fill='#2196F3'
							/>
							<path
								d='M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z'
								stroke='url(#paint0_linear_0_585)'
								strokeWidth='0.6'
							/>
							<path
								d='M41.7 14C41.7 20.4617 36.4617 25.7 30 25.7C23.5383 25.7 18.3 20.4617 18.3 14C18.3 7.53827 23.5383 2.3 30 2.3C36.4617 2.3 41.7 7.53827 41.7 14Z'
								stroke='url(#paint1_linear_0_585)'
								strokeWidth='0.6'
							/>
						</g>
						<defs>
							<filter
								id='filter0_dd_0_585'
								x='17'
								y='1'
								width='26'
								height='27'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'>
								<feFlood floodOpacity='0' result='BackgroundImageFix' />
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feOffset dy='1' />
								<feGaussianBlur stdDeviation='0.5' />
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.237602 0'
								/>
								<feBlend
									mode='normal'
									in2='BackgroundImageFix'
									result='effect1_dropShadow_0_585'
								/>
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feOffset />
								<feGaussianBlur stdDeviation='0.5' />
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
								/>
								<feBlend
									mode='normal'
									in2='effect1_dropShadow_0_585'
									result='effect2_dropShadow_0_585'
								/>
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='effect2_dropShadow_0_585'
									result='shape'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_0_585'
								x1='18.1174'
								y1='2'
								x2='18.1174'
								y2='25.7651'
								gradientUnits='userSpaceOnUse'>
								<stop stopOpacity='0.01' />
								<stop offset='0.8' stopOpacity='0.02' />
								<stop offset='1' stopOpacity='0.04' />
							</linearGradient>
							<linearGradient
								id='paint1_linear_0_585'
								x1='18'
								y1='2'
								x2='18'
								y2='26'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='white' stopOpacity='0.12' />
								<stop
									offset='0.2'
									stopColor='white'
									stopOpacity='0.06'
								/>
								<stop offset='1' stopColor='white' stopOpacity='0.01' />
							</linearGradient>
						</defs>
					</svg>
				</p>
			</div>
			<div className='auto-videos'>
				{auto.isFetched &&
					auto.data.splice(0, 5).map((e) => {
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
	);
};

export default Autoplay;
