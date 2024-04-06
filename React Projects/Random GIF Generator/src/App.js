import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
    return(
        <div className="w-full min-h-screen flex flex-col background">
            <h1 className="bg-rose-900 rounded-md w-11/12 text-center
            mt-[20px] py-2 text-2xl font-bold mx-auto text-blue-50">RANDOM GIFS</h1>

            <div className="flex flex-col w-full items-center gap-10 mt-[30px] mb-[30px]">
                <Random/>
                <Tag/>
            </div>

        </div>
    );
}

export default App;