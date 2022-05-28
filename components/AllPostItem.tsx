import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

function AllPostItem({ post }) {
  return (
    <div className="mb-10 flex	w-3/4 justify-between" key={post._id}>
      <div>
        <div className="flex">
          <img
            src={urlFor(post.author.image)}
            className="inline-block h-5 w-5 rounded-full align-middle "
          />
          <h1
            className="ml-2 inline-block align-middle font-mono text-xs"
            style={{ fontSize: '12px', fontWeight: '500' }}
          >
            {post.author.name}
          </h1>
        </div>
        <Link href={`/post/${post.slug.current}`}>
          <div className="cursor-pointer">
            <h1
              className="title font-extrabold "
              style={{ fontSize: '22px', fontFamily: 'Lato' }}
            >
              {post.title}
            </h1>
            <p
              className=""
              style={{
                fontSize: '16px',
                fontFamily: 'Lato',
                color: 'gray',
                fontWeight: '400',
              }}
            >
              {post.description}
            </p>
            <p className="text-sm " style={{ fontSize: '12px', color: 'gray' }}>
              {post.publishedAt.substring(0, 10)}
              <span className="space-x-3 font-bold"> &#8226; </span>
              <span className="space-x-3">5min</span>
            </p>
          </div>
        </Link>
      </div>
      <div style={{ width: '200px', minHeight: '134px' }}>
        <img src={urlFor(post.mainImage)} alt="" />
      </div>
    </div>
  )
}

export default AllPostItem
