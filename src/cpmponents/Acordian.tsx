import React, { useState } from "react"
interface AcordianProps{
    title:string,
    children: React.ReactNode
}

function Acordian({title,children} : AcordianProps ) {
    const [isOn,setIsOn] = useState(false)
  return (
    <div className="bg-[#e6e2d3] p-5 flex justify-center gap-10">
        <button className="bg-[#b9936c] px-3 py-2 rounded-md" onClick={()=> isOn ? setIsOn(false) : setIsOn(true)}>{title}</button>
        {isOn ? children : null}
    </div>
  )
}

export default Acordian