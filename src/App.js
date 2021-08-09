import React, {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  // function hello returns a function, that can be parameterized
  const hello = (who) => () => console.log('hello', who)

  const setToValue = (newValue) => () => setValue(newValue)

  return (
    <div>
      <h2>Parameterized logging</h2>
      <button onClick={hello('world')}>World</button>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('function')}>Function</button>
      <h2>Parameterized setting of values</h2>
      {value} <br />
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}

export default App
