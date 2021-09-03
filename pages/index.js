import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

export default function Index({ posts }) {
  return (
    <Layout>
      <h1 className="sm:text-4xl">The Pattern Garden</h1>
      <p>
        A library of patterns
      </p>
      <ul className="flex flex-wrap mt-16">
        {posts.map((post) => (
          <li className="w-60 mr-8 mb-8 border" key={post.filePath}>
            {post.data.image && <img src={post.data.image} />}
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <a><h2 className="leading-8">{post.data.title}</h2></a>
            </Link>
            {post.data.tags && post.data.tags.map((tag) => (<p>{tag}</p>))}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
