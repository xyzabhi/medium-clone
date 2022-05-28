import Link from 'next/link'
import React from 'react'

function Categories({ categories }) {
  const renderedCat = categories.map((cat) => {
    return (
      <div
        className="rounded  border border-slate-300 bg-transparent py-2 px-4 text-center text-xs text-sm font-light text-slate-400"
        style={{ borderWidth: '0.5px', width: 'fit-content' }}
        key={cat._id}
      >
        <Link href={`/${cat.title}`}>{cat.title}</Link>
      </div>
    )
  })
  const terms = [
    'Help',
    'status',
    'Writers',
    'Blog',
    'Careers',
    'Privacy',
    'Terms',
    'About',
    'Knowable',
  ]
  const renderedTerms = terms.map((term) => {
    return (
      <p
        key={term}
        className="mr-5 pb-3 text-slate-400 "
        style={{ fontSize: '14px' }}
      >
        {term}
      </p>
    )
  })
  return (
    <div className="w-1/4">
      <h1 className="py-5 pb-3 font-bold" style={{ fontSize: '14px' }}>
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </h1>
      <div className="grid  grid-cols-3 flex-wrap place-content-center gap-5 pb-10">
        {renderedCat}
      </div>
      <hr />
      <div className=" mx-auto	mt-5 flex flex-wrap">{renderedTerms}</div>
    </div>
  )
}

export default Categories
