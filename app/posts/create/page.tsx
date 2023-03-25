'use client'
import Link from 'next/link'
import Icon from 'bs-icon'

import Header from 'components/Header'
import Input from 'components/Input'

export default function Create() {
  return (
    <div>
      <Link href='/posts' className='btn gap-x-2 btn-ghost'>
        <Icon name='arrow-left' className='text-xl' /> Back
      </Link>
      <Header>Add post</Header>
      <div className='post-form'>
        <div className='w-full'>
          <Input name='title' placeholder='Title' />
        </div>
        <div className='w-full'>
          <textarea
            placeholder='Content'
            className='post-title-input'
            name='content'
          ></textarea>
        </div>
        <div className='w-full text-center'>
          <button className='btn gap-x-2'>
            <span>Save</span>
            <Icon name='disc' className='text-xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
