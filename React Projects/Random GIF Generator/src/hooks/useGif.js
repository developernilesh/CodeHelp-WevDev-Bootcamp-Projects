import { useState,useEffect } from 'react';
import axios from 'axios';

const url = `https://api.giphy.com/v1/gifs/random?api_key=0kGPNmOSzbqhM2KndV4qa0moyQmzvda8`;

const useGif = (tag) => {

    const [gif,setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true)
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSrc = output.data.data.images.downsized_large.url;
        setGif(imageSrc)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    },[]);

    return {gif,loading,fetchData}
}

export default useGif;
