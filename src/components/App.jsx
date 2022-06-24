import '../styles/App.css'
import NavBar from "./navbar/NavBar";
import Header from "./navbar/Header";
import {useState} from "react";
import General from "./General/General";
import Footer from "./navbar/Footer";



function App() {

  const [page, setPage] = useState(<General/>) // Routes useState =)

  return (
    <div className="App">
      <Header/>
      <NavBar setPage={setPage} />
      <div className={'ContentWrapper'}>
        {page}
      </div>
      <Footer/>
    </div>
  )
}

export default App;
