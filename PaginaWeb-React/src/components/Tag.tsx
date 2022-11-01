import '../styles/Tag.css'

interface propTag {
  type: string
}

function Tag ({ type }: propTag) {
  let style = ''
  if (type !== undefined) {
    style = type
  }
  return (
    <div className={`tag ${style}`}>{type}</div>
  )
}
export default Tag
