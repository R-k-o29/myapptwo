import './App.css';
import { useState } from 'react';
import UseEffect from './Hooks/useEffect';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle && <UseEffect />}
      <button onClick={() => setToggle(!toggle)}>Toggle Component</button>
    </>

  );
}

export default App;
