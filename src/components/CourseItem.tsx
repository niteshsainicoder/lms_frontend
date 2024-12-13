import React from 'react'
import EditButton from './EditButton'

type Props = {
  Id: string,
  title: string,
  description: string,
  duration: string,
  instructor: string
}
const CourseItem = ({ Id, title, description, duration, instructor }: Props) => {


  return (
    <div className=' relative rounded-lg p-4 ring  shadow-inner shadow-slate-300 hover:shadow-xl transition-all ring-slate-300 sm:w-[300px] sm:min-w-[300px] sm:max-w-[300px] h-[180px] sm:min-h-[180px] sm:max-h-[200px]'>
      <h1 className='text-ellipsis line-clamp-1 '>Title : {title}</h1>
      <h1 className='text-ellipsis line-clamp-1'>Instructor : {instructor}</h1>
      <h1 className='text-ellipsis line-clamp-1'>Duration : {duration}</h1>
      <h1 className='text-ellipsis line-clamp-1 max-w-60 '>Description : {description}</h1>
      <EditButton Id={Id} />
    </div>
  )
}

export default CourseItem
