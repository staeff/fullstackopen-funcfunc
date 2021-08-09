import React, {useState} from 'react'

const App = () => {
  const [value, setValue] = useState(10)

  // function hello returns a function
  // so onClick={hello()} renders to onClick{() => console.log('hello world')}
  const hello = () => {
      const handler = () => console.log('hello world')
      return handler
  }

  return (
    <div>
      {value} <br />
      <button onClick={hello()}>Click me</button>
    </div>
  )
}

export default App
