import React, {useState} from "react";
import Tours from "./Components/Tours";
import data from "./data"

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2 className="title">Tour Plan with Nilesh</h2>
        <h3 className="no-tour-subtitle">No Tours Left</h3>
        <button onClick={() => setTours(data)}
        className="refresh-btn">Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
