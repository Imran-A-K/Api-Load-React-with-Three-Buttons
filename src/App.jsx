import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'
import List from './List'
import Table from './Table'

function App() {
  const [requestType, setRequestType] = useState('users')
  const [items, setItems] = useState([])
  const API_URL = `https://jsonplaceholder.typicode.com/`

  useEffect(() => {

    const fetchItems = async () =>{
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        const data = await response.json();
        setItems(data);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchItems();

  }, [requestType])

  return (
    <div className="App">
      <Form requestType={requestType} setRequestType={setRequestType}/>
      {/* <List items={items} /> */}
    <Table  items={items} />
    </div>
  )
}

export default App
