import React, {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)

  // function hello returns a function, that can be parameterized
  const hello = (who) => () => console.log('hello', who)

  const setToValue = (newValue) => setValue(newValue)

  return (
    <div>
      <h2>Parameterized logging</h2>
      <button onClick={hello('world')}>World</button>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('function')}>Function</button>
      <h2>Parameterized setting of values</h2>
      {value} <br />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App
