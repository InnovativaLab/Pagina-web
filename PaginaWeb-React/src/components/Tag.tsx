import '../styles/Tag.css'
import { enumCourseType } from '../enums/enumData'

interface propTag{
    type: enumCourseType
  }

function Tag({type}:propTag) {
  let style=""
 if(type !== undefined){
  style = type
 }
  return (
    <div className={`tag ${style}`}>{type}</div>
  )
}

export default Tag