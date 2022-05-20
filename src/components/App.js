import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [items, setItems] = useState([])
  const [searchVal, setSearchval] = useState('')


const itemsToDisplay = items.filter(item=>(
  item.description.toLowerCase().includes(searchVal.toLowerCase())
))

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res=>res.json())
    .then(itemsData=>{
      console.log(itemsData);
      setItems(itemsData)
    })
  },[])
  console.log(items);

  return (
    <div className="app">
      <Header onSearch={setSearchval}/>
      <ListingsContainer items={itemsToDisplay} onDeleteRem={
        (rem)=>{setItems(rem)}
      }/>
    </div>
  );
}

export default App;