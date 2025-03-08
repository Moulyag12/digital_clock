import './App.css';
  import {useState,useEffect} from 'react';
function App() {
  const [ctime,setCtime] =useState(new Date().toLocaleTimeString());
  

    useEffect(()=>{
      const timer=setInterval(()=>{
        setCtime(new Date().toLocaleTimeString())
      },1000)

      return ()=>clearInterval(timer);
    },[]);
    
  return (
    <>
    <div className='timer-border'>
    <h1 className='timer'>{ctime}</h1>
    </div>
    </>
  );
}

export default App;
