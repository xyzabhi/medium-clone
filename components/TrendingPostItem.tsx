import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

function TrendingPostItem(props) {
  return (
    <div className="flex flex-row">
      <Link href={`/post/${props.item.slug.current}`} key={props.item._id}>
        <div className="flex cursor-pointer space-x-5">
          <div className="">
            <h1 className="text-3xl font-bold text-slate-300">
              {'0' + String(props.index + 1)}
            </h1>
          </div>
          <div className="flex flex-col">
            <div className=" flex flex-row space-x-5">
              <img
                src={
                  urlFor(props.item.author.image)
                    ? urlFor(props.item.author.image)
                    : ''
                }
                alt=""
                className="h-5 w-5 rounded-full"
              />
              <h1
                className="text-center  font-bold"
                style={{ fontSize: '14px' }}
              >
                {props.item.author.name}
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold">{props.item.title}</h1>
              <p
                className="text-sm text-slate-400"
                style={{ fontSize: '12px' }}
              >
                {props.item.publishedAt.substring(0, 10)}
                <span className="space-x-3 font-bold"> &#8226; </span>
                <span className="space-x-3">5min</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TrendingPostItem
