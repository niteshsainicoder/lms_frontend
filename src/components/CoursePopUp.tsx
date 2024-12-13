'use client';
import React, { useEffect, useState } from 'react'
import { useContexts } from './context';
import { AddCourse, DeleteCourse, GetSingleCourse, UpdateCourse } from '@/utils/functions/CourseCrud';

type Items = {
  _id: string,
  title: string,
  description: string,
  duration: string,
  instructor: string,

}
const CoursePopUp = ({ Id, type }: { Id: string, type: string }) => {
  const { setEditPopUp,setPopUpMessage } = useContexts();
  const [data, setData] = useState<Items>({ _id: '', title: 'New Course', description: 'New Course', duration: 'Unlimited', instructor: 'You' })

  const onClick = async () => {
    if (type == 'delete') {
      let result = await DeleteCourse(data._id)
      setPopUpMessage(result.message)

    }
    if (type == 'update') {
      let result = await UpdateCourse(data)
      setPopUpMessage(result.message)


    }
    if (type == 'create') {
      let result = await AddCourse({
        title: data?.title,
        description: data?.description,
        duration: data?.duration,
        instructor: data?.instructor,
      })
      setPopUpMessage(result.message)

    }
setEditPopUp({Id:'',Method:''})
  }


  useEffect(() => {
    const getItem = async () => {
      const data = await GetSingleCourse(Id)
      setData(data.data)

    }
    if (Id !== 'new') {
      getItem();
    }
  }, [])
  return (
    <div className=' absolute top-0 left-0 z-50 w-screen h-screen backdrop-blur-[2px]  flex items-center justify-center drop-shadow-lg'>
      <div className='w-full h-4/6 relative rounded-lg ring ring-stone-300 shadow-2xl  sm:w-3/4 sm:min-h-[300px] md:h-[300px] md:w-1/2 bg-slate-400 flex sm:flex-row flex-col  items-center justify-center  gap-4 md:gap-4  p-4 sm:p-6 md:px-16   '>
        <h1 className='absolute top-4 font-bold text-2xl '>{type.toLocaleUpperCase()} COURSE</h1>
        <div className='w-1/2 flex flex-col items-center justify-center gap-4'>
          <input type="text" disabled={type == 'delete'} value={data?.title} onChange={(e) => { setData({ ...data, title: e.target.value }) }} placeholder='Title' className=' rounded-md ring outline-none  ring-stone-200 bg-stone-100 p-1 px-2 w-full ' />
          <input type="text" disabled={type == 'delete'} value={data?.duration} onChange={(e) => { setData({ ...data, duration: e.target.value }) }} placeholder='Duration' className='rounded-md ring  outline-none  ring-stone-200 bg-stone-100 p-1 px-2 w-full' />
          <input type="text" disabled={type == 'delete'} value={data?.instructor} onChange={(e) => { setData({ ...data, instructor: e.target.value }) }} placeholder='Instructor' className='rounded-md ring  outline-none  ring-stone-200 bg-stone-100 p-1 px-2 w-full' />
        </div>
        <div className='w-1/2'><textarea placeholder='Description' value={data?.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} rows={5} maxLength={500} disabled={type == 'delete'} className=' rounded-md ring max-h-36 outline-none  ring-stone-200 bg-stone-100 p-1 px-2 w-full'></textarea></div>
        <div className='absolute bottom-0 w-full h-11 flex justify-evenly items-center  pb-4'>
          <button type='button' onClick={() => { setEditPopUp({ Id: '', Method: '' }) }} className='ring rounded-lg outline-none hover:bg-stone-300 hover:ring-slate-300 ring-slate-200 bg-stone-200 font-bold px-2 p-1'>Close</button>
          <button type='button' className='ring rounded-lg outline-none hover:bg-stone-300 hover:ring-slate-300 ring-slate-200 bg-stone-200 font-bold px-2 p-1' onClick={onClick}>{type.toLocaleUpperCase()}</button>
        </div>
      </div>

    </div>
  )
}

export default CoursePopUp
