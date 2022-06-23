import '../styles/App.css'
import NavBar from "./navbar/NavBar";
import Header from "./navbar/Header";
import {useState} from "react";
import General from "./General/General";


function App() {

  const [page, setPage] = useState(<General/>) // Routes useState =)

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className={'ContentWrapper'}>
        {page}
      </div>
    </div>
  )
}

export default App;
