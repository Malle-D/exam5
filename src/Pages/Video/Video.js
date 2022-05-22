import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Autoplay from './Autoplay/Autoplay';
import SinglCard from './SinglCard/SinglCard';
import "./video.css"

const Video = () => {

   const params = useParams()

   const [chanel, setChanel] = useState({
         isFetched: false,
         data: {},
         error: null,
      })

   useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/photos', {
         params: {
            id: params.id,
         },
      })
      .then(function (response) {
         setChanel({
            isFetched: true,
            data: response.data,
            error: false,
         });
      })
      .catch(function (error) {
         setChanel({
            isFetched: true,
            data: null,
            error: error,
         });
      });
	}, [params]);

   if (chanel.isFetched) {
      return (
         <div className='video-main_box'>
            <SinglCard src={`https://picsum.photos/id/${chanel.data[0].id}/1000/500`} title={chanel.data[0].title}/>
            <Autoplay />
         </div>
      )
   }
};

export default Video;
