import './App.css';
import Loading from './loading';
import Navbar from './navbar';
import { useState} from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() =>{
    setIsLoading(false);
  }, 10000)
  return (
    <>
      {isLoading? <Loading/> : 
        <>
          <Navbar />
          <div className="App">
            <header className="mainbody">
            </header>
          </div>
        </>
      }
      
    </>
  );
}

export default App;
