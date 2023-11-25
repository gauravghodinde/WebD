import { useState } from "react"
import { FirstComponent } from "./components/FirstComponent";

export const App = () => {

  const [x,setx] = useState(0);

  const changeX = ()=>{
    setx(x+1);
  }
  return (

    <div>
      
      <button  onClick={()=>{changeX()}}>click me {x}</button>
      <FirstComponent x={x} setx={setx} />

    </div>
  )
}
export default App
