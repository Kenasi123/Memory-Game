//import logo from './logo.svg';
import './App.css';
import MemoryCard from './components/MemoryCard';

function App() {
  return (
    <div className="App">
    
      <header className="App-header" >
        <h1>Memory Game</h1>
        <h4 style={{fontSize: "30px" , color: "#666666"}}>Match Cards To Win</h4>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
      </header>
          <div>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
          </div>
          <div>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
          </div>
          <div>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
          </div>
          <div>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
            <MemoryCard/>
          </div>  
      </div>
  
  );
}

export default App;
