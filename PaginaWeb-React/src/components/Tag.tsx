import '../styles/Tag.css'
import { enumCourseType } from '../enums/enumData'

interface propTag{
    text: String
    type: enumCourseType
  }

function Tag({text, type}:propTag) {
  let style=""
 if(type !== undefined){
  style = type
 }
  return (
    <div className={`tag ${style}`}>{text}</div>
  )
}

export default Tag