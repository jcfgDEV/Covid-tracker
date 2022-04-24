import React,{useState,useEffect} from 'react';
import { Box } from './Box';
import axios from 'axios';
import {MdCoronavirus} from 'react-icons/md';
import {AiOutlineGlobal} from 'react-icons/ai';
import {GiHealthNormal,GiDeathSkull} from 'react-icons/gi';

function Main() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  
    useEffect(() => {
      axios("https://disease.sh/v3/covid-19/all")
        .then(res => res)
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])  

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
  return (
      <>    
        <div className="flex justify-center p-10">
           <div>
                <h1 className="text-3xl md:text-7xl text-red-500 flex justify-center items-center mb-4">COVID TRACKER <MdCoronavirus color="green" /> </h1>
                <div className="w-full bg-blue-100 rounded-md grid justify-center grid-cols-1 md:grid-cols-2 md:">
                  <Box Datas={items.active.toLocaleString()} Bg="bg-red-400" Kind="Cases Globally" image={<AiOutlineGlobal color="red" className="ml-3  text-5xl" />} />
                  <Box Datas={items.recovered.toLocaleString()} Bg="bg-green-400" Kind="Recovered Globally" image={<GiHealthNormal color="green" className="ml-3 text-5xl"/>} />
                  <Box Datas={items.deaths.toLocaleString()} Bg="bg-gray-600" Kind="Deaths Globally" image={<GiDeathSkull  color="gray" className="ml-3 text-5xl"/>} />
                  
                </div>
           </div>
        </div>
      </>
  )
    }
}

export default Main;