import './App.css';
import samosa from "./images.jpeg"

const App = () => {

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count:</h2>
      <img className='samosa' src={samosa} alt="" />
    </div>
  )
}

export default App