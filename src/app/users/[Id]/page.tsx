'use client';
import AlertComponent from '@/components/AlertComponent';
import CourseItemRead from '@/components/CourseItemRead';
import { GetAllCourses } from '@/utils/functions/CourseCrud';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface Params {
  params: Promise<{ Id: string }>; // Assume async params
}


type Items = {
  _id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
};


const page = ({
  params,
}: Params) => {
  const [data, setData] = useState<Items[]>([{ _id: "", title: "", description: "", duration: "", instructor: "" }]);
  const { Id } = React.use(params);
  useEffect(() => {
    if (Id === undefined || Id === null || Id === '') {
      window.location.href = '/login';
    }

  }, [Id])



  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllCourses(); // Correctly await the response
      console.log(data, "from page");
      setData(data.AllCourses);
    };
    fetchData();
  }, []);
  return (
    <div className='w-full relative h-screen bg-stone-100 flex flex-col items-center justify-start gap-7'>
      <div className="w-full min-h-16 text-slate-100 bg-neutral-500 flex justify-around items-center">
        <h1 className="font-bold text-xl ">Hii, {'nitesh'}</h1>
        <span className='w-1/3 flex px-2 gap-1 rounded-md ring outline-none  ring-stone-400 bg-stone-100'><Image src={'/search-alt-2-svgrepo-com.svg'} width={20} height={20} alt={'search'} /> <input type="text" placeholder='Search' className={`  w-0  sm:w-full text-neutral-600 bg-transparent outline-none  p-1 px-2`} /></span>
        <p>Available Courses {data.length}</p>

      </div>
      <div className=" w-10/12 lg:w-8/12 grid   grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-7">
        {data && data?.map((val, index) => 
        <CourseItemRead key={index} ownerId={Id} Id={val._id} title={val.title} description={val.description} duration={val.duration} instructor={val.instructor} disabled={false} /> )}
      </div>
      <AlertComponent/>

    </div>
  )
}

export default page
