import Icon from 'bs-icon'
import { IPost } from 'src/Models/Post'

export default function Post(props) {
  return (
    <div className='post'>
      <button className='post-delete-button'>
        <Icon name='trash' className='text-xl' />
      </button>
      <b className='my-3'>Post title</b>
      <p className='my-4'>post content</p>
    </div>
  )
}
