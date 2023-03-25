import Icon from 'bs-icon'
import useFetch, { revalidate } from 'http-react'
import { IPost } from 'src/Models/Post'

export default function Post(props: Partial<IPost>) {
  const { reFetch } = useFetch('/api/posts', {
    method: 'DELETE',
    query: {
      id: props._id
    },
    onResolve() {
      revalidate('GET /api/posts')
    }
  })

  return (
    <div className='post'>
      <button
        className='post-delete-button'
        onClick={() => {
          const removePost = confirm('Remove?')

          if (removePost) {
            revalidate('DELETE /api/posts')
          }
        }}
      >
        <Icon name='trash' className='text-xl' />
      </button>
      <b className='my-3'>{props.title}</b>
      <p className='my-4'>{props.content}</p>
    </div>
  )
}
