'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useContexts } from './context';


const EditButton = ({Id}:{Id:string}) => {
  const [open, setOpen] = useState(false);
const {setEditPopUp} = useContexts();

  return (
    <div
      className={`absolute bottom-4 right-4 transition-all duration-500 ease-in-out flex items-center 
        ${open ? 'w-32 h-12 rounded-3xl bg-cyan-400' : 'w-12 h-12 rounded-full bg-yellow-300'}`}
    >

      <div className="flex w-full h-full items-center justify-center relative">
        {/* Edit Icon - Opens the Button */}
        <div
          className={`absolute right-4 transition-all duration-500 
            ${open ? '-translate-x-7 -z-40 rounded-full hover:bg-slate-400 ' : 'translate-x-2  z-10'}`}
          >
          <Image
            src={'/edit-svgrepo-com.svg'}
            width={30}
            height={30}
            alt="Edit"
            onClick={() => !open && setOpen(true)}
            className="cursor-pointer"
          />
        </div>

        <div
          className={`absolute right-2 transition duration-500 hover:bg-white rounded-full
            ${open ? 'translate-x-0 z-10' : 'translate-x-2 -z-10'}`}
        >
          <Image
            src={'/close-circle-svgrepo-com.svg'}
            width={30}
            height={30}
            alt="Close"
            onClick={() => open && setOpen(false)}
            className="cursor-pointer"
          />
        </div>


        <div
          className={`absolute flex gap-2 right-12 transition-all duration-500 rounded-full hover:bg-white
            ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setEditPopUp({Id:Id,Method:'update'})}
        >
          <Image
            src={'/update-svgrepo-com.svg'}
            width={30}
            height={30}
            alt="Add"
            className="cursor-pointer p-1"
          />

        </div>
        <div
          className={`absolute flex gap-2 right-[85px] transition-all duration-500 rounded-full hover:bg-white
            ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setEditPopUp({Id:Id,Method:'delete'})}
        >
          <Image
            src={'/delete-2-svgrepo-com.svg'}
            width={30}
            height={30}
            alt="Add"
            className="cursor-pointer p-1"
          />

        </div>
      </div>
    </div>
  );
};

export default EditButton;
