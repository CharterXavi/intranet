
const BulletinPost = ({ bulletin }) => {

  const content = bulletin.fields.content.content;

  return (
    <article>
      <header>
        <h1>{bulletin.fields.title}</h1>
        <small>
          <p>Last Updated: {bulletin.fields.date}</p>
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

export default BulletinPost