import './App.css';
import Screen from './components/screen'

function App() {
  return (
    <>
    <div className="App">
      <h3>Please Enter the OTP</h3>
      <Screen/>
      <br/>
      <p>Resend Button is available for only 3 times</p>
      <p>Note : Valid OTP is 1964</p>
      </div>
    </>
  );
}

export default App;
