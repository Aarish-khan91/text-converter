
import Navbar from './Components/Navbar';
import './App.css'
import TextForm from './Components/TextForm'


function App() {
  return (
    <>
      <Navbar title="TextUtil" aboutText="About" />
    
      <div className="container">

      <TextForm heading="Enter the text to analyze" />
      </div>

    </>
  );
}

export default App;
