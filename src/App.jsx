import '../src/styles/style.css'
import Main from './components/main';
import Navbar from './components/navbar';
import ProcessView from './components/processView';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Main/>
        <ProcessView/>
      </div>
    </div>
  );
}

export default App;
