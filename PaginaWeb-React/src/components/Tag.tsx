import '../styles/Tag.css'
import { enumCategoriaCurso } from '../enum'

interface propTag{
  type: enumCategoriaCurso
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
