
import './App.css';
import PinTab from './Components/PinTab';
import { useState } from 'react';

function App() {
  const [otp,setOtp]=useState("")
  return (
    <div className="App">
      <PinTab length={4} maxChar={1} setOtp={setOtp} />
      otp is {otp}
    </div>
  );
}

export default App;
