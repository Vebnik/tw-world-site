import '../styles/App.css'
import NavBar from "./navbar/NavBar";
import Header from "./navbar/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className={'ContentWrapper'}>
      </div>
    </div>
  )
}

export default App;
