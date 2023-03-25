'use client'
import Link from 'next/link'
import Icon from 'bs-icon'

import Header from 'components/Header'
import Input from 'components/Input'
import useFetch, { revalidate } from 'http-react'
import { useObject } from 'react-kuh'
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()

  const [newPost, setNeswPost] = useObject<{
    title: string
    content: string
  }>({
    title: '',
    content: ''
  })

  useFetch('/api/posts', {
    method: 'POST',
    body: newPost,
    onResolve: router.back
  })

  return (
    <div>
      <Link href='/posts' className='btn gap-x-2 btn-ghost'>
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <Header>Add post</Header>
      <div className='post-form'>
        <div className='w-full'>
          <Input
            name='title'
            placeholder='Title'
            value={newPost.title}
            onChange={e => {
              setNeswPost.write({
                title: e.target.value
              })
            }}
          />
        </div>
        <div className='w-full'>
          <textarea
            placeholder='Content'
            className='post-title-input'
            name='content'
            value={newPost.content}
            onChange={e => {
              setNeswPost.write({
                content: e.target.value
              })
            }}
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button
            className='btn gap-x-2'
            onClick={() => {
              revalidate('POST /api/posts')
            }}
          >
            <span>Save</span>
            <Icon name='disc' className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
