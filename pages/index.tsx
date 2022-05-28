import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Header from '../components/Header'
import Poster from '../components/Poster'
import TrendingPosts from '../components/TrendingPosts'
import { sanityClient, urlFor } from '../sanity'
import { Category, Post } from '../typings'
interface Props {
  posts: [Post]
  categories: [Category]
}

const Home: NextPage = ({ posts, categories }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Medium</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBv5TDSvKQ3cNaabIo74RoHjszQOQraWkCltivNIzelpt8mnVH6TvHB74jM9kmFfHweI&usqp=CAU"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Poster />
      <TrendingPosts posts={posts} />
      <hr />
      <Content posts={posts} categories={categories} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
  *[_type=="post"]{
    _id,title,author->{
      name,
      image
    },
    description,
    mainImage,
    slug,
    publishedAt,
    body
  }
  `
  const catQuery = `
  *[_type=="category"]{
   title,
  _id
}
  `
  const categories = await sanityClient.fetch(catQuery)

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
      categories,
    },
  }
}
export default Home
