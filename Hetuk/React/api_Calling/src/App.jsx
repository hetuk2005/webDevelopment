import './App.css'
import { ListTodo } from './Component/ListTodo'
import { Todos } from './Component/todos'
// import { ApiCall } from './Component/apiCalling'

function App() {

  return (
    <>
      {/* <ApiCall /> */}
      <Todos />
      <ListTodo />
    </>
  )
}

export default App
