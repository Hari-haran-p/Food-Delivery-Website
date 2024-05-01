import React, { useState } from 'react'
import './Home.css'
import { Header } from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

import AppDownload from '../../Components/AppDownload/AppDownload'
import FoodDsiplay from '../../Components/FoodDisplay/FoodDsiplay'




export const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDsiplay category={category}/>
      <AppDownload/>
    </div>
  )
}
 