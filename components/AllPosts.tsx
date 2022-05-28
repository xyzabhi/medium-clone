import React from 'react'
import AllPostItem from './AllPostItem'

function AllPosts({ posts }) {
  const renderedPosts = posts.map((post) => {
    return <AllPostItem post={post} />
  })
  return (
    <div className="flex w-2/3 flex-col justify-center">{renderedPosts}</div>
  )
}

export default AllPosts
