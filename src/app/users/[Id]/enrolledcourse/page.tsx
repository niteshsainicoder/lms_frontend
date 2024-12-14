'use client';

import CourseItemRead from '@/components/CourseItemRead';
import { GetAllCourses } from '@/utils/functions/CourseCrud';
import React, { useEffect, useState } from 'react'

type Item = {
    ownerId: string
    _id: string,
    title: string,
    description: string,
    instructor: string,
    duration: string,
    disabled: boolean
  }
const Page = () => {
    const [Data, setdata] = useState<any>();
    const [DisplayData, setDisplayData] = useState<Item[]>([{ ownerId: '', _id: '', title: '', description: '', instructor: '', duration: '', disabled: false }]);
    useEffect(() => {
        let result = localStorage.getItem('user')
        if (result) {
            let datas = JSON.parse(result!);
            setdata(datas);

            const anotherData = async () => {
                const response = await GetAllCourses();
                let arr = [];
                for (let i = 0; i < response.AllCourses?.length; i++) {
                    for (let j = 0; j < datas.data.enrolledCourses?.length; j++) {
                        if (response.AllCourses[i]?._id == datas.data?.enrolledCourses[j]) {
                            arr.push(response.AllCourses[i]);
                        }
                    }
                }
                setDisplayData(arr);
            }
            anotherData();
        }
    }, [])
    useEffect(() => {
        localStorage.removeItem('user');
    }, [DisplayData])

    return (
        <div className='w-full relative h-screen bg-stone-100 flex flex-col items-center justify-start gap-7'>
            <div className="w-full min-h-16 text-slate-100 bg-neutral-500 flex justify-around items-center">
                <h1 className="font-bold text-xl ">Hii, {'nitesh'}</h1>
                <p>Enrolled Courses : {Data?.data.enrolledCourses.length}</p>

            </div>
            <div className=" w-10/12 lg:w-8/12 grid   grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-7">
                {DisplayData?.map((val: { _id: string; title: string; description: string; duration: string; instructor: string; }, index: React.Key | null | undefined) => <CourseItemRead key={index} Id={val._id} title={val.title} description={val.description} duration={val.duration} instructor={val.instructor} ownerId={''} disabled={true} />)}
            </div>
        </div>
    )
}

export default Page
