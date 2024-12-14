'use client';

import React, { useEffect, useState } from "react";
import CourseItem from "@/components/CourseItem";
import CoursePopUp from "@/components/CoursePopUp";
import { useContexts } from "@/components/context";
import Image from "next/image";
import { GetAllCourses } from "@/utils/functions/CourseCrud";
import AlertComponent from "@/components/AlertComponent";

type Items = {
  _id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
};

interface Params {
  params: Promise<{ Id: string }>; // Assume async params
}

function AdminPage({ params }: Params) {
  const { Id } = React.use(params);  // Correctly unwrap the promise
  const { popUpMessage, EditPopUp, setEditPopUp } = useContexts();
  const [data, setData] = useState<Items[]>([{ _id: "", title: "", description: "", duration: "", instructor: "" }]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllCourses(); // Correctly await the response
      setData(data.AllCourses);
      console.log(data.AllCourses,'courses list');
      
    };
    fetchData();
  }, [popUpMessage]);


  return (
    <div className="w-screen h-screen bg-stone-100 relative flex flex-col items-center gap-4">
      <div className="w-full min-h-16 bg-neutral-500 text-slate-100 flex justify-around items-center">
        <h1 className="font-bold text-xl">Admin Dashboard</h1>
        <p>ID: {Id}</p>
      </div>

      <h1 className="text-2xl w-10/12 lg:w-8/12 font-bold flex items-center justify-between">All Courses: <span onClick={() => { setEditPopUp({ Id: 'new', Method: "create" }) }}><Image src={'/add-circle-svgrepo-com.svg'} width={40} height={40} className="hover:bg-cyan-300 rounded-full transition-all duration-500" alt={'add'} /></span></h1>

      <div className="w-10/12 lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {data?.map((val, index) => (
          <CourseItem
            key={index}
            Id={val._id}
            title={val.title}
            description={val.description}
            duration={val.duration}
            instructor={val.instructor}
          />
        ))}
      </div>

      {(EditPopUp.Id || EditPopUp.Id == 'new') && EditPopUp.Method && (
        <CoursePopUp Id={EditPopUp.Id} type={EditPopUp.Method} />
      )}
      <AlertComponent/>
          </div>
  );
}

export default AdminPage;
