
import './App.css'
import Card from './components/Card'

function App() {

  let age=26;
  let myArr=[1,23.27];

  let myObj={
    name:"Shiv",
    comp:"mkl",
    designation:"developer"
  }

  return (
    <>
  <Card username="shiv"/>
  {/* print 2 username  */}
   <Card username="Shiv" comname="klm" age={age} myArray={myArr} myObj={myObj}/>
   <Card/>
   <Card username="Ram"/>
   <Card age={age}/>
    </>
  )
}

export default App
