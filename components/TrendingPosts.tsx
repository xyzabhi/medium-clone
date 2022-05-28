import React from 'react'
import TrendingPostItem from './TrendingPostItem'

function TrendingPosts({ posts }) {
  const renderedPosts = posts.map((post: any, index: any) => (
    <div key={post._id}>
      <TrendingPostItem item={post} index={index} key="" />
    </div>
  ))
  return (
    <div className="mx-auto w-2/3 py-10">
      <h1 className="flex flex-row  font-bold leading-10">
        <span>
          <img
            className="mr-5 h-12 w-12"
            src="https://icon-library.com/images/trending-icon/trending-icon-23.jpg"
          />
        </span>
        TRENDING ON MEDIUM
      </h1>
      <div className="  grid grid-cols-1 place-content-center gap-8 py-5 sm:grid-cols-2 lg:grid-cols-3	">
        {renderedPosts}
      </div>
    </div>
  )
}

export default TrendingPosts
