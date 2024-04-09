import React from 'react'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'

const Home = () => {
  return (
    <div>
        <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
            <Header/>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home
