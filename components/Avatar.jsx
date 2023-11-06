import React from 'react'
import MyImage from '../src/assets/vs.jpg'
    
export default function Avatar() {
  return (
<figure className="max-w-lg">
  <img className="rounded-lg" src={MyImage} alt="thats-me"/>
  <figcaption className="mt-2 text-xs text-center text-gray-200 dark:text-gray-500">Vishali Sanghishetty</figcaption>
</figure>


  )
}
