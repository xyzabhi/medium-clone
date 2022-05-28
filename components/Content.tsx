import React from 'react'
import AllPosts from './AllPosts'
import Categories from './Categories'

function Content({ posts, categories }) {
  return (
    <div className=" mx-auto flex w-3/4 flex-col justify-center  pt-10 lg:flex-row">
      <AllPosts posts={posts} />

      <Categories categories={categories} />
    </div>
  )
}

export default Content
