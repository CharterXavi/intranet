import PostLink from '../cards/post-link'

export default function PostList({ posts = [] }) {
  return (
    <section>
      {posts.map((post) => (
          <PostLink 
            title={post.fields.title}
            date={post.fields.date}
            image={post.fields.image}
            slug={post.fields.slug}
            tags={post.fields.tags}
            category={post.fields.category}
          />,

          <PostLink 
            title={post.fields.title}
            date={post.fields.date}
            image={post.fields.image}
            slug={post.fields.slug}
            tags={post.fields.tags}
            category={post.fields.category}
          />

      ))}
    </section>
  )
}