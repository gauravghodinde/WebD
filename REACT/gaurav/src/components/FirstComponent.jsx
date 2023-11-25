import React, { useState } from 'react'

export const FirstComponent = ({x,setx}) => {
    const [btnDisabled,setBtnDisabled] = useState(false);


  return (
    <div>
        <button disabled={btnDisabled} onClick={()=>{setx(0)}}>
            
            {x==0 ? <h1>Reset</h1>: <h1>Reset {x} to 0</h1> }
            </button>
    </div>
  )
}
