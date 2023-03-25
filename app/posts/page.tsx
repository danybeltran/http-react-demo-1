'use client'
import Link from 'next/link'
import Icon from 'bs-icon'
import Header from 'components/Header'

import { IPost } from 'src/Models'
import Post from 'components/Post'
import useFetch from 'http-react'

const defaultPosts: IPost[] = []

function usePosts() {
  return useFetch('/api/posts', {
    default: defaultPosts
  })
}

export default function Posts() {
  const { data, loadingFirst, error, reFetch, mutate } = usePosts()

  if (loadingFirst) return <p>Loading...</p>

  if (error) return <p>Error:(</p>

  return (
    <div>
      <Header>Your posts</Header>
      <div className='flex space-x-4'>
        <Link href='/' className='btn gap-x-2 btn-ghost'>
          <Icon name='arrow-left' className='text-xl' /> Back
        </Link>
        <Link href='/posts/create' className='btn gap-x-2'>
          Add one post <Icon name='plus' className='text-xl' />
        </Link>
      </div>
      <div className='posts-container'>
        {data.map(post => (
          <Post {...post} key={'renderpost' + post._id} />
        ))}
      </div>
    </div>
  )
}
