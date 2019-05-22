import axios from 'axios'
import Link from 'next/link'

const Post = ({ post }) => {
  return <div>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <h1>{post.title}</h1>
    <p>{post.description}</p>
  </div>;
}

Post.getInitialProps = async props => {
  if (props.res) {
    console.log('setHeader')
    props.res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate')
  }
  console.log(props.asPath, props.query)

  const { data } = await axios.get(`https://netlify-json-api.netlify.com/posts/${props.query.id}`)

  return { post: data }
}

export default Post;