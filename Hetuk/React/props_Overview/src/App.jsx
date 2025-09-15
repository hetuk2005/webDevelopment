import './App.css'
import { Card } from './Card'

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Hello</h1>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Card name={"Hetuk"} age={20} email={"hetukpatel@gmail.com"} />
        <Card name={"Vinod"}  email={"vinodpatel@gmail.com"} />
        <Card  />
      </div>
    </>
  )
}

export default App
