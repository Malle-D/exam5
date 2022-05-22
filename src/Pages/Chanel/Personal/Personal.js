import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nora from '../../../Assets/images/1.jpg';
import VideoCard from '../../../Components/VideoCard/VideoCard';
import './personal.css';

const Personal = ({ name, src, mainvideo, secondTitle, videoId, id }) => {

   const [video, setVideo] = useState({
		isFetched: false,
		data: {},
		error: null,
	});

   useEffect(() =>{
      axios
			.get('https://jsonplaceholder.typicode.com/photos', {
				params: {
					albumId: id,
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
   }, [])

	return (
		<div className='personal-main-box'>
			<img src={src} alt='aaa' className='personal-main-img' />
			<div className='personal-box'>
				<img className='personal-img' src={Nora} alt='Userpic' />
				<div className='personal-info'>
					<h1 className='personal-title'>{name}</h1>
					<p className='personal-desc'>966K subscribed</p>
				</div>
				<svg
					width='22'
					height='26'
					viewBox='0 0 22 26'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.24'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3.66927 22.4545C1.64382 22.4545 0 20.8655 0 18.9091C0 17.6106 0.727122 16.4532 1.83849 15.835C1.83849 15.4764 1.83333 11.2256 1.83333 11.2256C1.83333 7.14185 4.66852 3.70365 8.55556 2.6765V2.36364C8.55556 1.05824 9.64997 0 11 0C12.35 0 13.4444 1.05824 13.4444 2.36364V2.6765C17.3323 3.70344 20.1667 7.14194 20.1667 11.2318V15.8454C21.2793 16.4664 22 17.619 22 18.9091C22 20.8681 20.3586 22.4545 18.3307 22.4545H14.6667C14.6646 24.413 13.0197 26 11 26C8.97496 26 7.33333 24.4143 7.33333 22.4571L3.66927 22.4545ZM9.77778 22.4545C9.77778 23.1083 10.3244 23.6364 11 23.6364C11.6709 23.6364 12.2201 23.1064 12.2222 22.4545H9.77778ZM17.7222 11.2318V16.9427C17.7222 17.2702 17.9922 17.6032 18.3181 17.6847L18.6385 17.7648C19.1733 17.8984 19.5556 18.3689 19.5556 18.9091C19.5556 19.5624 19.0088 20.0909 18.3307 20.0909H3.66927C2.99369 20.0909 2.44444 19.56 2.44444 18.9091C2.44444 18.3666 2.82517 17.8979 3.36026 17.7647L3.69151 17.6823C4.0153 17.6017 4.27778 17.2732 4.27778 16.9426V11.2256C4.27778 7.63639 7.28675 4.72727 11 4.72727C14.7148 4.72727 17.7222 7.63541 17.7222 11.2318Z'
						fill='black'
					/>
				</svg>

				<NavLink id='7' to={`/chanel/7`}>
					Subscribe 2.3m
				</NavLink>
			</div>
			<ul className='sections-list'>
				<li className='sections-item sections-item-active'>
					<a href='#'>Home</a>
				</li>
				<li className='sections-item'>
					<a href='#'>Videos</a>
				</li>
				<li className='sections-item'>
					<a href='#'>Playlists</a>
				</li>
				<li className='sections-item'>
					<a href='#'>Channels</a>
				</li>
				<li className='sections-item'>
					<a href='#'>Discussion</a>
				</li>
				<li className='sections-item'>
					<a href='#'>About</a>
				</li>
				<li className='sections-item'>
					<a href='#'>
						<svg
							width='19'
							height='19'
							viewBox='0 0 19 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z'
								fill='black'
							/>
						</svg>
					</a>
				</li>
			</ul>
			<div className='solo-box'>
				<NavLink to={`/video/${videoId}`}>
					<img className='solo-img' src={mainvideo} alt='main video' />
				</NavLink>
				<div className='solo-titles'>
					<h2 className='solo-name'>{secondTitle}</h2>
					<p className='solo-describe'>
						Your cheap internet-based banner advertising will become one
						of the sought for ads there are. Today, the world of Internet
						advertising is rapidly evolving beyond banner ads and
						intrusive pop-ups. Bayles A common medium for advertising on
						the Internet is the use of banner ads.
					</p>
					<p className='solo-views'>11k views · 6 months ago</p>
				</div>
			</div>
			<h2 className='solo-title'>{`${name} videos`}</h2>
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
	);
};

export default Personal;
