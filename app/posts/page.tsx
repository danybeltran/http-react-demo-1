'use client'
import Link from 'next/link'
import Icon from 'bs-icon'
import Header from 'components/Header'

export default function Posts() {
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
      <div className='posts-container'></div>
    </div>
  )
}
