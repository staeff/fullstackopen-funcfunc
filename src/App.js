import React, {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  // function hello returns a function, that can be parameterized
  const hello = (who) => () => console.log('hello', who)

  return (
    <div>
      {value} <br />
      <button onClick={hello('world')}>World</button>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('function')}>Function</button>
    </div>
  )
}

export default App
