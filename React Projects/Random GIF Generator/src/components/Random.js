import Loader from "./Loader";
import useGif from "../hooks/useGif";

const Random = () => {

    const {gif,loading,fetchData} = useGif(); 

    function clickHandler(){
        fetchData()
    }

    return(
        <div className="w-1/2 bg-teal-500 border border-green-950 
        rounded-lg flex flex-col items-center gap-5 mt-[15px]">
            <h2 className="text-xl mt-2 underline uppercase font-bold text-teal-950">A RANDOM GIF</h2>
            {
                loading ? <Loader/> : <img src={gif} width={350}/>          
            }
            <button onClick={clickHandler}
            className="w-10/12 bg-blue-200 rounded-lg text-lg font-semibold py-1 mb-4"
            >Generate</button>
        </div>
    );
}

export default Random;