import React from 'react';
import { useState } from 'react';
import Loader from './Loader';
import useGif from '../hooks/useGif';

export default function Tag() {

    const[tag,setTag] = useState("");

    const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
        fetchData()
    }

    return(
        <div className="w-1/2 bg-blue-500 border border-green-950 
        rounded-lg flex flex-col items-center gap-5 mt-[15px]">
            <h2 className="text-xl mt-2 underline uppercase font-bold text-blue-950">Random {tag} GIF</h2>
            {
                loading ? <Loader/> : <img src={gif} width={350}/>          
            }
            <input type="text" onChange={(event)=>setTag(event.target.value)} value={tag}
            className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            placeholder="search your topic here"
            />
            <button onClick={clickHandler}
            className="w-10/12 bg-blue-200 rounded-lg text-lg font-semibold py-1 mb-4"
            >Generate</button>
        </div>
    );
}
