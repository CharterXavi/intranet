
const Post = ({ post }) => {

  const content = post.fields.content.content;

  return (
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>Published: {post.fields.date}</p>
        </small>
      </header>
      <section>
        {
          content.map(paragraph => {
            return <p>{paragraph.content[0].value}</p>
          })
        }
      </section>
    </article>
  )
}

export default Post