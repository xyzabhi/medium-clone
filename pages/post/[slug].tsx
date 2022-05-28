import { GetServerSideProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}
function Post({ post }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <main>
      <Header />
      <img src={urlFor(post.mainImage)} className="h-40 w-full object-cover" />
      <article className="max-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            src={urlFor(post.author.image).url()!}
            className="h-10 w-10 rounded-full"
          />
          <p className="text-xs font-extralight">
            Blogs Posted By{' '}
            <span className="text-black-600 font-bold">{post.author.name}</span>
          </p>
        </div>
        <div>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props: any) => {
                ;<h1 className="my-5 text-2xl font-bold" {...props} />
              },
              h2: (props: any) => {
                ;<h1 className="my-5 text-xl font-bold" {...props} />
              },
              li: ({ children }: any) => {
                ;<li className="ml-4 list-disc">{children}</li>
              },
              link: ({ href, children }: any) => {
                ;<a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              },
            }}
          />
        </div>
      </article>
      <hr />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-15 max-auto my-10 mb-10 flex max-w-2xl flex-col"
      >
        <input {...register('_id')} type="hidden" name="_id" value={post._id} />
        <label className="mb-5 block ">
          <span className="text-gray-700">Name</span>
          <input
            {...register('name', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            type="text"
            placeholder="John"
          />
        </label>
        <label className="mb-5 block ">
          <span className="text-gray-700">Email</span>
          <input
            {...register('email', { required: true })}
            className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            type="text"
            placeholder="John"
          />
        </label>
        <label className="mb-5 block ">
          <span className="text-gray-700">Comment</span>
          <textarea
            {...register('comment', { required: true })}
            className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
            placeholder="John"
            rows={8}
          ></textarea>
        </label>
        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">The Name field is required</span>
          )}
          {errors.email && (
            <span className="text-red-500">The Email field is required</span>
          )}
          {errors.comment && (
            <span className="text-red-500">The Comment field is required</span>
          )}
        </div>
        <input
          type="submit"
          className="mx-auto block w-full items-center rounded-full border-2 border-black bg-black p-10 p-2 text-white shadow  "
        />
      </form>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `
  *[_type=='post']{
    _id,
    slug{
      current
    }
  }
  `
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const query = `
  *[_type=="post" && slug.current==$slug][0]
  {
    _id,
    _createdAt,
    title,
    author->{
      name,
      image
    },
    description,mainImage,
    slug,
    body
  }
  `
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })
  if (!post) {
    return { notFound: true }
  }
  return {
    props: {
      post,
    },
    revalidate: 60, //After 60 seconds it updates
  }
}
