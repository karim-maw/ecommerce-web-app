import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { categories } from '../../data'
import '../../css/categories.css'
import CategoriesOptions from './CategoriesOptions'




const Categories = () => {
  const {cat} = useParams()
  return (
    <div className='categories-cont'>
      <h1>Our Categories</h1>
      <h2>These are the available categories</h2>
      <div className="categories-cards">
        {categories.map((category) => (
          <CategoriesOptions category={category} key={category.id}/>
        ))}
      </div>
    </div>
  )
}

export default Categories
