import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [coding, setCoding] = useState([]);

  useEffect(() => {
    axios.get("/api/coding_languages") // proxy is appended before /api (i.e http://localhost/api/coding_languages)
    .then((responce) => {
      setCoding(responce.data);
    })
    .catch((e) => {
      console.log(e);
    })
  }, [])

  return (
    <>
      <div><h1>HARE KRISHNA</h1></div>
      <div>Coding Languages: {coding.length}</div>

      {
        coding.map((code) => (
          <div key={code.id}>
            <h3>Language: {code.language}</h3>
            <h3>File Size: {code.fileSize}</h3>
            <hr/>
          </div>
        ))
      }
    </>
  )
}

export default App
