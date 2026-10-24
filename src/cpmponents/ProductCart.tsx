
type brands = "nike" | "addidas"
type Category = "boys" | "girls"

interface Product {
    id:string,
    title:string,
    price:number,
    category:Category,
    brand:brands,
    rating:number,
    imgURL:string
}





function ProductCart( {title,price,category,brand,rating} : Product ) {
  return (
    <div className="bg-[#dac292] flex flex-col items-center p-3 rounded-md">
      <h3>{title}</h3>
      <p>category : {category} | brand : {brand}</p>
      <p>price : {price}</p>
      <p>rating : {rating}⭐</p>
    </div>
  )
}

export default ProductCart