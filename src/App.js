import React,{useEffect,useState} from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get(`http://localhost:4000/`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
  }, [])
  
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
