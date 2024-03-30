import React from "react";

const Filter = ({filterData,category,setCategory}) => {

    function filterHandler(title) {
        setCategory(title)
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max 
        space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map( (data) => {
                return (
                    <button key={data.id} onClick={() => filterHandler(data.title)}
                    className={`text-lg px-2 py-1 rounded-md font-medium text-white
                    bg-bgDark hover:bg-opacity-80 border-2 transition-all duration-200
                    ${category === data.title ? "bg-opacity-90 border-white" : "bg-opacity-65 border-transparent"}`}
                    >
                        {data.title}
                    </button>
                );
            })}
        </div>
    );
}

export default Filter;