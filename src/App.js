import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './App.css';

function App() {
  const [typeEffect] = useTypewriter({
    words: ['Full Stack Developer ' , 'Full Stack Developer '],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className='App'>
      <h1>
        I am a 
        <span style={{fontweight: 'bold', color: 'orange', marginLeft: '5px'}}>{typeEffect}</span>
      </h1>

    </div>
  )
}
export default App;