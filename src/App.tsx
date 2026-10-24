import { useState } from "react"
import ProductCart from "./cpmponents/ProductCart"
import { Products } from "./type"
import Acordian from "./cpmponents/Acordian"
import Reviews from "./cpmponents/Reviews"
import "./style.css"
function App() {
  const [category,setCategory] = useState("all")
  const [maxNum,setMaxNum] = useState(700)
  const filteredCategory = Products.filter((i)=>{
    return category === "all" || i.brand === category;
  })
  const filteredMaxNum = filteredCategory.filter((i)=>{
    return i.price <= maxNum
  })
  return (
    <div className="flex flex-col">
      {filteredMaxNum.map((i)=>(
        <div key={i.id}>
          <ProductCart {...i} />
          <Reviews review={i.review}/>
        </div>
      ))}
      
      
      
      <input type="number" value={maxNum} className="m-5 p-5 bg-[#c4b7a6]" onChange={(v)=>  setMaxNum(Number(v.target.value))} />
      <Acordian title="choose brand">
        <button onClick={()=> setCategory("nike")}>nike</button>
        <button onClick={()=> setCategory("addidas")}>addidas</button>
        <button onClick={()=> setCategory("all")}>all</button>
      </Acordian>


      
    </div>
  )
}

export default App


