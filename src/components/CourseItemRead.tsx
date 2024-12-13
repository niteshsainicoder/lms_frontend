import { enrollInCourse } from '@/utils/functions/CourseCrud'
import React from 'react'
import { useContexts } from './context'

type Item = {
  ownerId: string
  Id: string,
  title: string,
  description: string,
  instructor: string,
  duration: string,
  disabled: boolean
}
const CourseItemRead = ({ ownerId, Id, title, description, instructor, duration, disabled = false }: Item) => {
  const { setPopUpMessage } = useContexts();
  const enroll = async () => {
    console.log(ownerId, Id,'clicked');
    
    if (Id == '' || Id == null || Id == undefined || title == '') {
      setPopUpMessage('Please select a course')
      return
    }
    const result = await enrollInCourse(ownerId,Id);  
    setPopUpMessage(result.message);


  }
  return (
    <div className=' relative rounded-lg p-4 ring hover:shadow-xl transition-all ring-slate-300 sm:w-[300px] sm:min-w-[300px] sm:max-w-[300px] h-[180px] sm:min-h-[180px] sm:max-h-[200px]'>
      <h1 className='text-ellipsis line-clamp-1 '><span className='font-bold antialiased'>Title</span> : {title}</h1>
      <h1 className='text-ellipsis line-clamp-1'> <span className='font-bold antialiased'>Duration</span> : {duration}</h1>
      <h1 className='text-ellipsis line-clamp-1'><span className='font-bold antialiased'>Instructor</span> : {instructor}</h1>
      <p className='text-ellipsis line-clamp-3 w-full'> <span className='font-bold antialiased'>Description</span> : {description}</p>
      <button type='button' onClick={enroll} disabled={disabled} className={`absolute bottom-2 right-2 ${disabled ? 'bg-slate-300 ' : ' bg-neutral-400 hover:bg-stone-200'}  ring-[1px]   ring-slate-500 w-11 h-11 flex items-center justify-center rounded-full  text-neutral-900 text-xs font-bold `}>{disabled ? 'Owned' : 'Enroll'}</button>    </div>
  )
}

export default CourseItemRead
