type brands = "nike" | "addidas"
type Category = "boys" | "girls"

interface Review {
    id:number,
    author:string,
    comment:string
}

interface Product {
    id:string,
    title:string,
    price:number,
    category:Category,
    brand:brands,
    rating:number,
    imgURL:string,
    review:Review[]
}


const Products : Product[] = [{id:"ar69",title:"tShirt",price:100,category:"boys",brand:"nike",rating:5,
    imgURL:"img.jpg",review:[{id:1,author:"arman",comment:"awful"},{id:2,author:"amir",comment:"not worth"},{id:1,author:"huxn",comment:"not that bad"}]},
    {id:"ba26",title:"hoodie",price:500,category:"boys",brand:"nike",rating:4.7,imgURL:"img2.jpg",review:[{id:1,author:"arman",comment:"awful"},{id:2,author:"amir",comment:"not worth"},{id:1,author:"huxn",comment:"not that bad"}]},
    {id:"is88",title:"tanktop",price:60,category:"boys",brand:"addidas",rating:3,imgURL:"img3.jpg",review:[{id:1,author:"arman",comment:"awful"},{id:2,author:"amir",comment:"not worth"},{id:1,author:"huxn",comment:"not that bad"}]},
    {id:"mam55",title:"mantoo",price:700,category:"girls",brand:"nike",rating:5,imgURL:"img4.jpg",review:[{id:1,author:"arman",comment:"awful"},{id:2,author:"amir",comment:"not worth"},{id:1,author:"huxn",comment:"not that bad"}]}
]

export  {Products}