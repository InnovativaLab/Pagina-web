import { Course } from '../types';
import Card from '../components/Card'

const loadTags=(course:Course)=>{
  let tags: string[] = []
  if(course.Categoria!==undefined){
    tags.push(course.Categoria)
  }
  if(course.Subcategoria!==undefined){
    tags.push(course.Subcategoria)
  }
  return tags
}
export const loadCards=(courses: Course[])=>{
    let coursesElements: JSX.Element[] = []
    coursesElements = Object.values(courses).map(course =>
      <Card
        key={course.Titulo}
        img={course.ImagenDePortada}
        alt={`Imagen de portada del curso de ${course.Titulo}`}
        title={course.Titulo}
        text={course.Descripcion}
        tags={loadTags(course)}
      />)
    return coursesElements
}