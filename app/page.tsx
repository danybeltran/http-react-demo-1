import Link from 'next/link'
import Header from 'components/Header'

export default function Home() {
  return (
    <div>
      <Header>Http React demo</Header>
      <Link href='/posts' className='btn btn-ghost underline'>
        Posts
      </Link>
    </div>
  )
}
