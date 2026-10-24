import { useState } from 'react'


interface Review {
    id:number,
    author:string,
    comment:string
}

function Reviews({review}:{review:Review[]}) {
  const [currentIndex,setCurrentIndex] = useState(0)
  const currentReview = review[currentIndex]
  return (
    <div className='flex items-center justify-center p-5 gap-10'>
      <h3>Reviews</h3>
      <button className='bg-[#b9936c] px-3 py-2 rounded-md disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-400"' disabled={currentIndex == review.length - 1} onClick={()=> setCurrentIndex(currentIndex+1)}>next</button>
      <button className='bg-[#b9936c] px-3 py-2 rounded-md disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-gray-400"' disabled={currentIndex == 0} onClick={()=> setCurrentIndex(currentIndex-1)}>prev</button>
      <div>
        <h3>{currentReview?.author} : </h3>
        <h3>{currentReview?.comment}</h3>
      </div>
    </div>

  )
}

export default Reviews