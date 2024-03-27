// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Box from './components/Box';

function App() {
  const response = [
    {
      itemName:"Nilesh",
      itemDate:"10",
      itemMonth:"July",
      itemYear:"1999"
    },
    {
      itemName:"ABC",
      itemDate:"15",
      itemMonth:"March",
      itemYear:"1995"
    },
    {
      itemName:"XYZ",
      itemDate:"22",
      itemMonth:"September",
      itemYear:"2004"
    }
  ]

  return (
      <Box>
        <div className="App">
          <h1>Hello React !</h1>
        </div>
        {/* <Item name="Nilesh"></Item> */}
        {/* <ItemDate day="10" month="July" year="1999"></ItemDate> */}
        <Item name={response[0].itemName}>Arghya</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        {/* <Item name="ABC"></Item> */}
        {/* <ItemDate day="15" month="March" year="1995"></ItemDate> */}
        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        {/* <Item name="XYZ"></Item> */}
        {/* <ItemDate day="22" month="September" year="2004"></ItemDate> */}
        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      </Box>
  );
}

export default App;
